var __assign = this && this.__assign || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
            Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
}
, ImprovedInitiative;
!function(ImprovedInitiative) {
    var Combatant = function() {
        function Combatant(statBlockJson, Encounter, savedCombatant) {
            var _this = this;
            this.Encounter = Encounter,
            this.Id = probablyUniqueString(),
            this.Alias = ko.observable(""),
            this.TemporaryHP = ko.observable(0),
            this.Tags = ko.observableArray(),
            this.Initiative = ko.observable(0),
            this.StatBlock = ko.observable(),
            this.Hidden = ko.observable(!1),
            this.IsPlayerCharacter = !1,
            this.calculateModifiers = function() {
                var modifiers = ImprovedInitiative.StatBlock.Default().Abilities;
                for (var attribute in _this.StatBlock().Abilities)
                    modifiers[attribute] = _this.Encounter.Rules.GetModifierFromScore(_this.StatBlock().Abilities[attribute]);
                return modifiers;
            }
            ,
            this.GetInitiativeRoll = function() {
                return _this.Encounter.Rules.Check(_this.InitiativeBonus);
            }
            ;
            var statBlock = __assign({}, ImprovedInitiative.StatBlock.Default(), statBlockJson);
            savedCombatant ? (statBlock.HP.Value = savedCombatant.MaxHP || savedCombatant.StatBlock.HP.Value,
            this.Id = String(savedCombatant.Id)) : (statBlock.HP.Value = this.getMaxHP(statBlock.HP),
            this.Id = statBlock.Id + "." + probablyUniqueString()),
            this.StatBlock(statBlock),
            this.processStatBlock(statBlock),
            this.StatBlock.subscribe(function(newStatBlock) {
                _this.processStatBlock(newStatBlock, statBlock),
                statBlock = newStatBlock;
            }),
            this.CurrentHP = ko.observable(this.MaxHP),
            savedCombatant && this.processSavedCombatant(savedCombatant);
        }
        return Combatant.prototype.processStatBlock = function(newStatBlock, oldStatBlock) {
            this.setIndexLabel(oldStatBlock && oldStatBlock.Name),
            this.IsPlayerCharacter = "player" == newStatBlock.Player,
            this.AC = newStatBlock.AC.Value,
            this.MaxHP = newStatBlock.HP.Value,
            this.AbilityModifiers = this.calculateModifiers(),
            newStatBlock.InitiativeModifier || (newStatBlock.InitiativeModifier = 0),
            this.InitiativeBonus = this.AbilityModifiers.Dex + newStatBlock.InitiativeModifier || 0;
        }
        ,
        Combatant.prototype.processSavedCombatant = function(savedCombatant) {
            this.IndexLabel = savedCombatant.IndexLabel,
            this.CurrentHP(savedCombatant.CurrentHP),
            this.TemporaryHP(savedCombatant.TemporaryHP),
            this.Initiative(savedCombatant.Initiative),
            this.Alias(savedCombatant.Alias),
            this.Tags(ImprovedInitiative.Tag.getLegacyTags(savedCombatant.Tags, this)),
            this.Hidden(savedCombatant.Hidden);
        }
        ,
        Combatant.prototype.getMaxHP = function(HP) {
            if (ImprovedInitiative.Store.Load(ImprovedInitiative.Store.User, "RollMonsterHp"))
                try {
                    return this.Encounter.Rules.RollDiceExpression(HP.Notes).Total;
                } catch (e) {
                    return HP.Value;
                }
            return HP.Value;
        }
        ,
        Combatant.prototype.setIndexLabel = function(oldName) {
            var name = this.StatBlock().Name
              , counts = this.Encounter.CombatantCountsByName;
            name != oldName && (oldName && counts[oldName](counts[oldName]() - 1),
            counts[name] ? counts[name](counts[name]() + 1) : counts[name] = ko.observable(1),
            this.IndexLabel = counts[name]());
        }
        ,
        Combatant;
    }();
    ImprovedInitiative.Combatant = Combatant;
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    var CombatantCommander = function() {
        function CombatantCommander(encounter, promptQueue, statBlockEditor, eventLog) {
            var _this = this;
            this.encounter = encounter,
            this.promptQueue = promptQueue,
            this.statBlockEditor = statBlockEditor,
            this.eventLog = eventLog,
            this.SelectedCombatants = ko.observableArray([]),
            this.HasSelected = ko.computed(function() {
                return _this.SelectedCombatants().length > 0;
            }),
            this.HasOneSelected = ko.computed(function() {
                return 1 === _this.SelectedCombatants().length;
            }),
            this.HasMultipleSelected = ko.computed(function() {
                return _this.SelectedCombatants().length > 1;
            }),
            this.StatBlock = ko.computed(function() {
                var selectedCombatants = _this.SelectedCombatants();
                return 1 == selectedCombatants.length ? selectedCombatants[0].StatBlock() : ImprovedInitiative.StatBlock.Default();
            }),
            this.Names = ko.computed(function() {
                return _this.SelectedCombatants().map(function(c) {
                    return c.ViewModel.DisplayName();
                }).join(", ");
            }),
            this.Select = function(data, e) {
                data && (e && e.ctrlKey || _this.SelectedCombatants.removeAll(),
                _this.SelectedCombatants.push(data));
            }
            ,
            this.selectByOffset = function(offset) {
                var newIndex = _this.encounter.Combatants.indexOf(_this.SelectedCombatants()[0]) + offset;
                newIndex < 0 ? newIndex = 0 : newIndex >= _this.encounter.Combatants().length && (newIndex = _this.encounter.Combatants().length - 1),
                _this.SelectedCombatants.removeAll(),
                _this.SelectedCombatants.push(_this.encounter.Combatants()[newIndex]);
            }
            ,
            this.Remove = function() {
                var combatantsToRemove = _this.SelectedCombatants.removeAll()
                  , indexOfFirstCombatantToRemove = _this.encounter.Combatants.indexOf(combatantsToRemove[0])
                  , deletedCombatantNames = combatantsToRemove.map(function(c) {
                    return c.StatBlock().Name;
                });
                if (_this.encounter.Combatants().length > combatantsToRemove.length)
                    for (; combatantsToRemove.indexOf(_this.encounter.ActiveCombatant()) > -1; )
                        _this.encounter.NextTurn();
                _this.encounter.Combatants.removeAll(combatantsToRemove);
                var allMyFriendsAreGone = function(name) {
                    return _this.encounter.Combatants().every(function(c) {
                        return c.StatBlock().Name != name;
                    });
                };
                deletedCombatantNames.forEach(function(name) {
                    allMyFriendsAreGone(name) && _this.encounter.CombatantCountsByName[name](0);
                }),
                indexOfFirstCombatantToRemove >= _this.encounter.Combatants().length && (indexOfFirstCombatantToRemove = _this.encounter.Combatants().length - 1),
                _this.Select(_this.encounter.Combatants()[indexOfFirstCombatantToRemove]),
                _this.eventLog.AddEvent(deletedCombatantNames.join(", ") + " removed from encounter."),
                _this.encounter.QueueEmitEncounter();
            }
            ,
            this.SelectPrevious = function() {
                _this.selectByOffset(-1);
            }
            ,
            this.SelectNext = function() {
                _this.selectByOffset(1);
            }
            ,
            this.EditHP = function() {
                var selectedCombatants = _this.SelectedCombatants()
                  , combatantNames = selectedCombatants.map(function(c) {
                    return c.ViewModel.DisplayName();
                }).join(", ")
                  , prompt = new ImprovedInitiative.DefaultPrompt("Apply damage to " + combatantNames + ": <input id='damage' class='response' type='number' />",function(response) {
                    var damage = response.damage;
                    damage && (selectedCombatants.forEach(function(c) {
                        return c.ViewModel.ApplyDamage(damage);
                    }),
                    _this.eventLog.AddEvent(damage + " damage applied to " + combatantNames + "."),
                    _this.encounter.QueueEmitEncounter());
                }
                );
                return _this.promptQueue.Add(prompt),
                !1;
            }
            ,
            this.AddTemporaryHP = function() {
                var selectedCombatants = _this.SelectedCombatants()
                  , combatantNames = selectedCombatants.map(function(c) {
                    return c.ViewModel.DisplayName();
                }).join(", ")
                  , prompt = new ImprovedInitiative.DefaultPrompt("Grant temporary hit points to " + combatantNames + ": <input id='thp' class='response' type='number' />",function(response) {
                    var thp = response.thp;
                    thp && (selectedCombatants.forEach(function(c) {
                        return c.ViewModel.ApplyTemporaryHP(thp);
                    }),
                    _this.eventLog.AddEvent(thp + " temporary hit points granted to " + combatantNames + "."),
                    _this.encounter.QueueEmitEncounter());
                }
                );
                return _this.promptQueue.Add(prompt),
                !1;
            }
            ,
            this.AddTag = function(combatantVM) {
                return combatantVM instanceof ImprovedInitiative.CombatantViewModel && _this.Select(combatantVM.Combatant),
                _this.SelectedCombatants().forEach(function(c) {
                    return c.ViewModel.AddTag(_this.encounter);
                }),
                !1;
            }
            ,
            this.EditInitiative = function() {
                return _this.SelectedCombatants().forEach(function(c) {
                    return c.ViewModel.EditInitiative();
                }),
                !1;
            }
            ,
            this.MoveUp = function() {
                var combatant = _this.SelectedCombatants()[0]
                  , index = _this.encounter.Combatants.indexOf(combatant);
                if (combatant && index > 0) {
                    var newInitiative = _this.encounter.MoveCombatant(combatant, index - 1);
                    _this.eventLog.AddEvent(combatant.ViewModel.DisplayName() + " initiative set to " + newInitiative + ".");
                }
            }
            ,
            this.MoveDown = function() {
                var combatant = _this.SelectedCombatants()[0]
                  , index = _this.encounter.Combatants.indexOf(combatant);
                if (combatant && index < _this.encounter.Combatants().length - 1) {
                    var newInitiative = _this.encounter.MoveCombatant(combatant, index + 1);
                    _this.eventLog.AddEvent(combatant.ViewModel.DisplayName() + " initiative set to " + newInitiative + ".");
                }
            }
            ,
            this.EditName = function() {
                return _this.SelectedCombatants().forEach(function(c) {
                    return c.ViewModel.EditName();
                }),
                !1;
            }
            ,
            this.EditStatBlock = function() {
                if (1 == _this.SelectedCombatants().length) {
                    var selectedCombatant = _this.SelectedCombatants()[0];
                    _this.statBlockEditor.EditStatBlock(null, _this.StatBlock(), function(_, __, newStatBlock) {
                        selectedCombatant.StatBlock(newStatBlock),
                        _this.encounter.QueueEmitEncounter();
                    }, function(_, __) {
                        _this.Remove();
                    });
                }
            }
            ,
            this.Commands = ImprovedInitiative.BuildCombatantCommandList(this),
            this.Commands.forEach(function(c) {
                var keyBinding = ImprovedInitiative.Store.Load(ImprovedInitiative.Store.KeyBindings, c.Description);
                keyBinding && (c.KeyBinding = keyBinding);
                var showOnActionBar = ImprovedInitiative.Store.Load(ImprovedInitiative.Store.ActionBar, c.Description);
                null != showOnActionBar && c.ShowOnActionBar(showOnActionBar);
            });
        }
        return CombatantCommander;
    }();
    ImprovedInitiative.CombatantCommander = CombatantCommander;
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    var StaticCombatantViewModel = function() {
        function StaticCombatantViewModel(combatant) {
            this.GetHPColor = function(combatant) {
                var monsterHpVerbosity = ImprovedInitiative.Store.Load(ImprovedInitiative.Store.User, "MonsterHPVerbosity");
                if (!combatant.IsPlayerCharacter && ("Monochrome Label" == monsterHpVerbosity || "Hide All" == monsterHpVerbosity))
                    return "auto";
                var green = Math.floor(combatant.CurrentHP() / combatant.MaxHP * 170)
                  , red = Math.floor((combatant.MaxHP - combatant.CurrentHP()) / combatant.MaxHP * 170);
                return "rgb(" + red + "," + green + ",0)";
            }
            ,
            this.Name = combatant.ViewModel ? combatant.ViewModel.DisplayName() : combatant.StatBlock().Name,
            this.Id = combatant.Id,
            this.HPDisplay = this.GetHPDisplay(combatant),
            this.HPColor = this.GetHPColor(combatant),
            this.Initiative = combatant.Initiative(),
            this.IsPlayerCharacter = combatant.IsPlayerCharacter,
            this.Tags = combatant.Tags();
        }
        return StaticCombatantViewModel.prototype.GetHPDisplay = function(combatant) {
            var monsterHpVerbosity = ImprovedInitiative.Store.Load(ImprovedInitiative.Store.User, "MonsterHPVerbosity");
            return combatant.IsPlayerCharacter || "Actual HP" == monsterHpVerbosity ? combatant.TemporaryHP() ? "{0}+{1}/{2}".format(combatant.CurrentHP(), combatant.TemporaryHP(), combatant.MaxHP) : "{0}/{1}".format(combatant.CurrentHP(), combatant.MaxHP) : "Hide All" == monsterHpVerbosity ? "" : combatant.CurrentHP() <= 0 ? "<span class='defeatedHP'>Defeated</span>" : combatant.CurrentHP() < combatant.MaxHP / 2 ? "<span class='bloodiedHP'>Bloodied</span>" : combatant.CurrentHP() < combatant.MaxHP ? "<span class='hurtHP'>Hurt</span>" : "<span class='healthyHP'>Healthy</span>";
        }
        ,
        StaticCombatantViewModel;
    }();
    ImprovedInitiative.StaticCombatantViewModel = StaticCombatantViewModel;
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    var appInsights = window.appInsights
      , CombatantViewModel = function() {
        function CombatantViewModel(Combatant, CombatantCommander, PromptUser, LogEvent) {
            var _this = this;
            this.Combatant = Combatant,
            this.CombatantCommander = CombatantCommander,
            this.PromptUser = PromptUser,
            this.LogEvent = LogEvent,
            this.ApplyDamage = function(inputDamage) {
                var damage = parseInt(inputDamage)
                  , healing = -damage
                  , currHP = _this.Combatant.CurrentHP()
                  , tempHP = _this.Combatant.TemporaryHP()
                  , allowNegativeHP = ImprovedInitiative.Store.Load(ImprovedInitiative.Store.User, "AllowNegativeHP");
                isNaN(damage) || (damage > 0 ? (appInsights.trackEvent("DamageApplied", {
                    Amount: damage
                }),
                tempHP -= damage,
                tempHP < 0 && (currHP += tempHP,
                tempHP = 0),
                currHP <= 0 && !allowNegativeHP && (appInsights.trackEvent("CombatantDefeated", {
                    Name: _this.DisplayName()
                }),
                currHP = 0)) : (currHP += healing,
                currHP > _this.Combatant.MaxHP && (currHP = _this.Combatant.MaxHP)),
                _this.Combatant.CurrentHP(currHP),
                _this.Combatant.TemporaryHP(tempHP));
            }
            ,
            this.ApplyTemporaryHP = function(inputTHP) {
                var newTemporaryHP = parseInt(inputTHP)
                  , currentTemporaryHP = _this.Combatant.TemporaryHP();
                isNaN(newTemporaryHP) || (newTemporaryHP > currentTemporaryHP && (currentTemporaryHP = newTemporaryHP),
                _this.Combatant.TemporaryHP(currentTemporaryHP));
            }
            ,
            this.ApplyInitiative = function(inputInitiative) {
                var initiative = parseInt(inputInitiative);
                _this.Combatant.Initiative(initiative),
                _this.Combatant.Encounter.SortByInitiative();
            }
            ,
            this.GetHPColor = function() {
                var green = Math.floor(_this.Combatant.CurrentHP() / _this.Combatant.MaxHP * 170)
                  , red = Math.floor((_this.Combatant.MaxHP - _this.Combatant.CurrentHP()) / _this.Combatant.MaxHP * 170);
                return "rgb(" + red + "," + green + ",0)";
            }
            ,
            this.EditHP = function() {
                _this.CombatantCommander.Select(_this.Combatant),
                _this.CombatantCommander.EditHP();
            }
            ,
            this.EditInitiative = function() {
                var prompt = new ImprovedInitiative.DefaultPrompt("Update initiative for " + _this.DisplayName() + ": <input id='initiative' class='response' type='number' />",function(response) {
                    var initiative = response.initiative;
                    initiative && (_this.ApplyInitiative(initiative),
                    _this.LogEvent(_this.DisplayName() + " initiative set to " + initiative + "."),
                    _this.Combatant.Encounter.QueueEmitEncounter());
                }
                );
                _this.PromptUser(prompt);
            }
            ,
            this.EditName = function() {
                var currentName = _this.DisplayName()
                  , prompt = new ImprovedInitiative.DefaultPrompt("Change alias for " + currentName + ": <input id='alias' class='response' />",function(response) {
                    var alias = response.alias;
                    _this.Combatant.Alias(alias),
                    alias ? _this.LogEvent(currentName + " alias changed to " + alias + ".") : _this.LogEvent(currentName + " alias removed."),
                    _this.Combatant.Encounter.QueueEmitEncounter();
                }
                );
                _this.PromptUser(prompt);
            }
            ,
            this.HiddenClass = ko.computed(function() {
                return _this.Combatant.Hidden() ? "fa-eye-slash" : "fa-eye";
            }),
            this.ToggleHidden = function(data, event) {
                _this.Combatant.Hidden() ? (_this.Combatant.Hidden(!1),
                _this.LogEvent(_this.DisplayName() + " revealed in player view.")) : (_this.Combatant.Hidden(!0),
                _this.LogEvent(_this.DisplayName() + " revealed in player view.")),
                _this.Combatant.Encounter.QueueEmitEncounter();
            }
            ,
            this.DisplayName = ko.computed(function() {
                var alias = ko.unwrap(_this.Combatant.Alias)
                  , name = ko.unwrap(_this.Combatant.StatBlock).Name
                  , combatantCount = ko.unwrap(_this.Combatant.Encounter.CombatantCountsByName[name])
                  , index = _this.Combatant.IndexLabel;
                return alias || (combatantCount > 1 ? name + " " + index : name);
            }),
            this.AddTag = function(encounter) {
                var prompt = new ImprovedInitiative.TagPrompt(encounter,_this.Combatant,_this.LogEvent);
                _this.PromptUser(prompt);
            }
            ,
            this.RemoveTag = function(tag) {
                _this.Combatant.Tags.splice(_this.Combatant.Tags.indexOf(tag), 1),
                _this.LogEvent(_this.DisplayName() + ' removed note: "' + tag.Text + '"'),
                _this.Combatant.Encounter.QueueEmitEncounter();
            }
            ,
            this.DisplayHP = ko.pureComputed(function() {
                return _this.Combatant.TemporaryHP() ? "{0}+{1}/{2}".format(_this.Combatant.CurrentHP(), _this.Combatant.TemporaryHP(), _this.Combatant.MaxHP) : "{0}/{1}".format(_this.Combatant.CurrentHP(), _this.Combatant.MaxHP);
            });
        }
        return CombatantViewModel;
    }();
    ImprovedInitiative.CombatantViewModel = CombatantViewModel;
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    var Command = function() {
        function Command(Description, ActionBinding, KeyBinding, ActionBarIcon, showOnActionBar, LockOnActionBar) {
            void 0 === KeyBinding && (KeyBinding = ""),
            void 0 === ActionBarIcon && (ActionBarIcon = ""),
            void 0 === showOnActionBar && (showOnActionBar = !0),
            void 0 === LockOnActionBar && (LockOnActionBar = !1);
            var _this = this;
            this.Description = Description,
            this.ActionBinding = ActionBinding,
            this.KeyBinding = KeyBinding,
            this.ActionBarIcon = ActionBarIcon,
            this.LockOnActionBar = LockOnActionBar,
            this.ShowOnActionBar = ko.observable(showOnActionBar),
            LockOnActionBar && this.ShowOnActionBar.subscribe(function(_) {
                _this.ShowOnActionBar(!0);
            }),
            this.ToolTip = ko.computed(function() {
                return _this.Description + " [" + _this.KeyBinding + "]";
            });
            var keyBinding = ImprovedInitiative.Store.Load(ImprovedInitiative.Store.KeyBindings, this.Description);
            keyBinding && (this.KeyBinding = keyBinding);
            var showOnActionBarSetting = ImprovedInitiative.Store.Load(ImprovedInitiative.Store.ActionBar, this.Description);
            null != showOnActionBarSetting && this.ShowOnActionBar(showOnActionBarSetting);
        }
        return Command;
    }();
    ImprovedInitiative.Command = Command,
    ImprovedInitiative.BuildEncounterCommandList = function(c) {
        return [new Command("Start Encounter",c.StartEncounter,"alt+r","fa-play"), new Command("End Encounter",c.EndEncounter,"alt+e","fa-stop"), new Command("Reroll Initiative",c.RerollInitiative,"alt+shift+i","fa-refresh",(!1)), new Command("Clear Encounter",c.ClearEncounter,"alt+del","fa-trash"), new Command("Open Library",c.ShowLibraries,"alt+a","fa-user-plus"), new Command("Show Player Window",c.LaunchPlayerWindow,"alt+w","fa-users"), new Command("Next Turn",c.NextTurn,"n","fa-step-forward"), new Command("Previous Turn",c.PreviousTurn,"alt+n","fa-step-backward"), new Command("Save Encounter",c.SaveEncounter,"alt+s","fa-save"), new Command("Settings",c.ShowSettings,"?","fa-gear",(!0),(!0))];
    }
    ,
    ImprovedInitiative.BuildCombatantCommandList = function(c) {
        return [new Command("Damage/Heal Selected Combatant",c.EditHP,"t","fa-plus-circle"), new Command("Add Note to Selected Combatant",c.AddTag,"g","fa-tag",(!1)), new Command("Remove Selected Combatant from Encounter",c.Remove,"del","fa-remove"), new Command("Rename Selected Combatant",c.EditName,"f2","fa-i-cursor"), new Command("Edit Selected Combatant",c.EditStatBlock,"alt+e","fa-edit",(!1)), new Command("Edit Selected Combatant Initiative",c.EditInitiative,"alt+i","fa-play-circle-o"), new Command("Move Selected Combatant Down",c.MoveDown,"alt+j","fa-angle-double-down"), new Command("Move Selected Combatant Up",c.MoveUp,"alt+k","fa-angle-double-up"), new Command("Apply Temporary HP",c.AddTemporaryHP,"alt+t","fa-medkit"), new Command("Select Next Combatant",c.SelectNext,"j","fa-arrow-down",(!1)), new Command("Select Previous Combatant",c.SelectPrevious,"k","fa-arrow-up",(!1))];
    };
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    var pendingComponents = [];
    ImprovedInitiative.ComponentLoader = {
        AfterComponentLoaded: function(callback) {
            return $.when.apply($, pendingComponents).always(callback);
        }
    },
    ImprovedInitiative.RegisterComponents = function() {
        var templateLoader = {
            loadTemplate: function(name, templateConfig, callback) {
                if (templateConfig.name) {
                    var fullUrl = "/templates/" + templateConfig.name
                      , request_1 = $.get(fullUrl, function(markupString) {
                        ko.components.defaultLoader.loadTemplate(name, markupString, callback);
                    });
                    pendingComponents.push(request_1),
                    request_1.always(function(_) {
                        return pendingComponents.remove(request_1);
                    });
                } else
                    callback(null);
            }
        };
        ko.components.loaders.unshift(templateLoader);
        var registerComponent = function(name, viewModel) {
            return ko.components.register(name, {
                viewModel: viewModel,
                template: {
                    name: name
                }
            });
        };
        registerComponent("settings", ImprovedInitiative.Settings),
        registerComponent("defaultstatblock", function(params) {
            return params.statBlock;
        }),
        registerComponent("activestatblock", function(params) {
            return params.statBlock;
        }),
        registerComponent("combatant", function(params) {
            return params.combatant.ViewModel = new ImprovedInitiative.CombatantViewModel(params.combatant,params.combatantCommander,params.addPrompt,params.logEvent),
            params.combatant.ViewModel;
        }),
        registerComponent("playerdisplaycombatant", function(params) {
            return params.combatant;
        }),
        registerComponent("libraries", function(params) {
            return new ImprovedInitiative.LibraryViewModel(params.encounterCommander,params.library);
        }),
        registerComponent("defaultprompt", function(params) {
            return params.prompt;
        }),
        registerComponent("tagprompt", function(params) {
            return params.prompt;
        }),
        registerComponent("initiativeprompt", function(params) {
            return params.prompt;
        }),
        registerComponent("tutorial", function(params) {
            return new ImprovedInitiative.TutorialViewModel(params);
        });
    };
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    ImprovedInitiative.Conditions = {
        Blinded: "<ul>\n        <li>A blinded creature can’t see and automatically fails any ability check that requires sight.</li>\n        <li>Attack rolls against the creature have advantage, and the creature’s Attack rolls have disadvantage.</li>\n        </ul>",
        Charmed: "<ul>\n        <li>A charmed creature can’t Attack the charmer or target the charmer with harmful Abilities or magical effects.</li>\n        <li>The charmer has advantage on any ability check to interact socially with the creature.</li>\n        </ul>",
        Deafened: "<ul>\n        <li>A deafened creature can’t hear and automatically fails any ability check that requires hearing.</li>\n        </ul>",
        Frightened: "<ul>\n        <li>A frightened creature has disadvantage on Ability Checks and Attack rolls while the source of its fear is within line of sight.</li>\n        <li>The creature can’t willingly move closer to the source of its fear.</li>\n        </ul>",
        Grappled: "<ul>\n        <li>A grappled creature’s speed becomes 0, and it can’t benefit from any bonus to its speed.</li>\n        <li>The condition ends if the Grappler is incapacitated (see the condition).</li>\n        <li>The condition also ends if an effect removes the grappled creature from the reach of the Grappler or Grappling effect, such as when a creature is hurled away by the Thunderwave spell.</li>\n        </ul>",
        Incapacitated: "<ul>\n        <li>An incapacitated creature can’t take actions or reactions.</li>\n        </ul>",
        Invisible: "<ul>\n        <li>An invisible creature is impossible to see without the aid of magic or a Special sense. For the purpose of Hiding, the creature is heavily obscured. The creature’s location can be detected by any noise it makes or any tracks it leaves.</li>\n        <li>Attack rolls against the creature have disadvantage, and the creature’s Attack rolls have advantage.</li>\n        </ul>",
        Paralyzed: "<ul>\n        <li>A paralyzed creature is incapacitated (see the condition) and can’t move or speak.</li>\n        <li>The creature automatically fails Strength and Dexterity saving throws.</li>\n        <li>Attack rolls against the creature have advantage.</li>\n        <li>Any Attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.</li>\n        </ul>",
        Petrified: "<ul>\n        <li>A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging.</li>\n        <li>The creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings.</li>\n        <li>Attack rolls against the creature have advantage.</li>\n        <li>The creature automatically fails Strength and Dexterity saving throws.</li>\n        <li>The creature has Resistance to all damage.</li>\n        <li>The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized.</li>\n        </ul>",
        Poisoned: "<ul>\n        <li>A poisoned creature has disadvantage on Attack rolls and Ability Checks.</li>\n        </ul>",
        Prone: "<ul>\n        <li>A prone creature’s only Movement option is to crawl, unless it stands up and thereby ends the condition.</li>\n        <li>The creature has disadvantage on Attack rolls.</li>\n        <li>An Attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the Attack roll has disadvantage.</li>\n        </ul>",
        Restrained: "<ul>\n        <li>A restrained creature’s speed becomes 0, and it can’t benefit from any bonus to its speed.</li>\n        <li>Attack rolls against the creature have advantage, and the creature’s Attack rolls have disadvantage.</li>\n        <li>The creature has disadvantage on Dexterity saving throws.</li>\n        </ul>",
        Stunned: "<ul>\n        <li>A stunned creature is incapacitated (see the condition), can’t move, and can speak only falteringly.</li>\n        <li>The creature automatically fails Strength and Dexterity saving throws.</li>\n        <li>Attack rolls against the creature have advantage.</li>\n        </ul>",
        Unconscious: "<ul>\n        <li>An unconscious creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings.</li>\n        <li>The creature drops whatever it’s holding and falls prone.</li>\n        <li>The creature automatically fails Strength and Dexterity saving throws.</li>\n        <li>Attack rolls against the creature have advantage.</li>\n        <li>Any Attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.</li>\n        </ul>"
    };
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    ko.bindingHandlers.focusOnRender = {
        update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            ImprovedInitiative.ComponentLoader.AfterComponentLoaded(function() {
                $(element).find(valueAccessor()).first().select();
            });
        }
    },
    ko.bindingHandlers.afterRender = {
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {},
        update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            valueAccessor()(element, valueAccessor, allBindings, viewModel, bindingContext);
        }
    },
    ko.bindingHandlers.onEnter = {
        init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            var callback = valueAccessor();
            $(element).keypress(function(event) {
                var keyCode = event.which ? event.which : event.keyCode;
                return 13 !== keyCode || (callback.call(viewModel),
                !1);
            });
        }
    },
    ko.bindingHandlers.uiText = {
        update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            ImprovedInitiative.TextAssets[valueAccessor()] ? $(element).html(ImprovedInitiative.TextAssets[valueAccessor()]) : $(element).html(valueAccessor());
        }
    };
    var statBlockTextHandler = function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var text = valueAccessor().toString()
          , md = markdownit();
        text = md.renderInline(text);
        var rules = bindingContext.$root.Encounter.Rules
          , promptQueue = bindingContext.$root.PromptQueue
          , findDice = new RegExp(rules.ValidDicePattern.source,"g");
        text = text.replace(findDice, function(match) {
            return "<span class='rollable'>" + match + "</span>";
        }),
        $(element).html(text),
        $(element).find(".rollable").on("click", function(event) {
            var diceExpression = event.target.innerHTML
              , diceRoll = rules.RollDiceExpression(diceExpression)
              , prompt = new ImprovedInitiative.DefaultPrompt("Rolled: " + diceExpression + " -> " + diceRoll.String + " <input class='response' type='number' value='" + diceRoll.Total + "' />",function(_) {}
            );
            promptQueue.Add(prompt);
        });
    };
    ko.bindingHandlers.statBlockText = {
        init: statBlockTextHandler,
        update: statBlockTextHandler
    },
    ko.bindingHandlers.format = {
        init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            bindingContext.formatString = $(element).html();
        },
        update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            var replacements = ko.unwrap(valueAccessor());
            replacements instanceof Array || (replacements = [replacements]),
            $(element).html(bindingContext.formatString.format(replacements));
        }
    },
    ko.bindingHandlers.hoverPop = {
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            var params = valueAccessor()
              , componentSelector = params.selector
              , popComponent = $(componentSelector).first();
            popComponent.hide(),
            $(element).on("mouseover", function(event) {
                var hoveredElementData = ko.dataFor(event.target);
                params.data(hoveredElementData);
                var target = $(event.target)
                  , top = target.offset().top
                  , left = target.offset().left + 5
                  , maxPopPosition = $("body").outerHeight() - (popComponent.outerHeight() + 30);
                top > maxPopPosition && (top = maxPopPosition),
                popComponent.css("left", left),
                popComponent.css("top", top).select();
            }),
            popComponent.add(element).hover(function() {
                popComponent.show();
            }, function() {
                popComponent.hide();
            });
        },
        update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {}
    },
    ko.bindingHandlers.awesomplete = {
        init: function(element, valueAccessor) {
            new Awesomplete(element,{
                list: valueAccessor(),
                minChars: 1,
                autoFirst: !0
            }),
            $(element).select();
        }
    };
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    var xpThresholdsByLevel = {
        1: {
            easy: 25,
            medium: 50,
            hard: 75,
            deadly: 100
        },
        2: {
            easy: 50,
            medium: 100,
            hard: 150,
            deadly: 200
        },
        3: {
            easy: 75,
            medium: 150,
            hard: 225,
            deadly: 400
        },
        4: {
            easy: 125,
            medium: 250,
            hard: 375,
            deadly: 500
        },
        5: {
            easy: 250,
            medium: 500,
            hard: 750,
            deadly: 1100
        },
        6: {
            easy: 300,
            medium: 600,
            hard: 900,
            deadly: 1400
        },
        7: {
            easy: 350,
            medium: 750,
            hard: 1100,
            deadly: 1700
        },
        8: {
            easy: 450,
            medium: 900,
            hard: 1400,
            deadly: 2100
        },
        9: {
            easy: 550,
            medium: 1100,
            hard: 1600,
            deadly: 2400
        },
        10: {
            easy: 600,
            medium: 1200,
            hard: 1900,
            deadly: 2800
        },
        11: {
            easy: 800,
            medium: 1600,
            hard: 2400,
            deadly: 3600
        },
        12: {
            easy: 1e3,
            medium: 2e3,
            hard: 3e3,
            deadly: 4500
        },
        13: {
            easy: 1100,
            medium: 2200,
            hard: 3400,
            deadly: 5100
        },
        14: {
            easy: 1250,
            medium: 2500,
            hard: 3800,
            deadly: 5700
        },
        15: {
            easy: 1400,
            medium: 2800,
            hard: 4300,
            deadly: 6400
        },
        16: {
            easy: 1600,
            medium: 3200,
            hard: 4800,
            deadly: 7200
        },
        17: {
            easy: 2e3,
            medium: 3900,
            hard: 5900,
            deadly: 8800
        },
        18: {
            easy: 2100,
            medium: 4200,
            hard: 6300,
            deadly: 9500
        },
        19: {
            easy: 2400,
            medium: 4900,
            hard: 7300,
            deadly: 10900
        },
        20: {
            easy: 2800,
            medium: 5700,
            hard: 8500,
            deadly: 12700
        }
    }
      , xpAmountsByChallenge = {
        0: 0,
        "1/8": 25,
        "1/4": 50,
        "1/2": 100,
        1: 200,
        2: 450,
        3: 700,
        4: 1100,
        5: 1800,
        6: 2300,
        7: 2900,
        8: 3900,
        9: 5e3,
        10: 5900,
        11: 7200,
        12: 8400,
        13: 1e4,
        14: 11500,
        15: 13e3,
        16: 15e3,
        17: 18e3,
        18: 2e4,
        19: 22e3,
        20: 25e3,
        21: 33e3,
        22: 41e3,
        23: 5e4,
        24: 62e3,
        25: 75e3,
        26: 9e4,
        27: 105e3,
        28: 12e4,
        29: 135e3,
        30: 155e3
    }
      , rankedXpMultipliers = [1, 1, 1.5, 2, 2.5, 3, 4, 4]
      , getXpMultiplierRank = function(enemyCount) {
        return enemyCount <= 1 ? 1 : enemyCount <= 2 ? 2 : enemyCount <= 6 ? 3 : enemyCount <= 10 ? 4 : enemyCount <= 14 ? 5 : 6;
    }
      , getXpMultiplier = function(enemyCount, playerCount) {
        var multiplierRank = getXpMultiplierRank(enemyCount);
        return playerCount < 3 ? rankedXpMultipliers[multiplierRank + 1] : playerCount > 5 ? rankedXpMultipliers[multiplierRank - 1] : rankedXpMultipliers[multiplierRank];
    }
      , getModifiedXp = function(enemyChallengeRatings, playerCount) {
        var totalXpBase = enemyChallengeRatings.reduce(function(currentSum, cr) {
            return xpAmountsByChallenge[cr] ? currentSum + xpAmountsByChallenge[cr] : currentSum;
        }, 0);
        return totalXpBase * getXpMultiplier(enemyChallengeRatings.length, playerCount);
    }
      , getDifficulty = function(totalXp, playerLevels) {
        if (0 == playerLevels.length)
            return "";
        if (playerLevels.some(function(level) {
            return "number" !== typeof level || level < 1 || level > 20;
        }))
            return "";
        var xpThresholds = {
            easy: playerLevels.reduce(function(p, c) {
                return p + xpThresholdsByLevel[c].easy;
            }, 0),
            medium: playerLevels.reduce(function(p, c) {
                return p + xpThresholdsByLevel[c].medium;
            }, 0),
            hard: playerLevels.reduce(function(p, c) {
                return p + xpThresholdsByLevel[c].hard;
            }, 0),
            deadly: playerLevels.reduce(function(p, c) {
                return p + xpThresholdsByLevel[c].deadly;
            }, 0)
        };
        return totalXp > xpThresholds.deadly ? "Deadly" : totalXp > xpThresholds.hard ? "Hard" : totalXp > xpThresholds.medium ? "Medium" : totalXp > xpThresholds.easy ? "Easy" : "Trivial";
    }
      , DifficultyCalculator = function() {
        function DifficultyCalculator() {}
        return DifficultyCalculator.Calculate = function(enemyChallengeRatings, playerLevels) {
            var totalXpWithEnemyCount = getModifiedXp(enemyChallengeRatings, playerLevels.length);
            return {
                Difficulty: getDifficulty(totalXpWithEnemyCount, playerLevels),
                TotalExperience: totalXpWithEnemyCount
            };
        }
        ,
        DifficultyCalculator;
    }();
    ImprovedInitiative.DifficultyCalculator = DifficultyCalculator;
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    function getStatBlocksFromXml(xmlString) {
        return $(xmlString).find("monster").toArray().map(function(xmlDoc) {
            var importer = new StatBlockImporter(xmlDoc);
            return importer.GetStatBlock();
        });
    }
    var StatBlockImporter = function() {
        function StatBlockImporter(domElement) {
            this.domElement = domElement;
        }
        return StatBlockImporter.prototype.getString = function(selector) {
            return $(this.domElement).find(selector).html() || "";
        }
        ,
        StatBlockImporter.prototype.getInt = function(selector) {
            var int = $(this.domElement).find(selector).html();
            return int ? parseInt(int) : 0;
        }
        ,
        StatBlockImporter.prototype.getType = function() {
            return this.getString("size") + " " + this.getString("type") + ", " + this.getString("alignment");
        }
        ,
        StatBlockImporter.prototype.getAbilities = function() {
            return {
                Str: this.getInt("str"),
                Dex: this.getInt("dex"),
                Con: this.getInt("con"),
                Int: this.getInt("int"),
                Wis: this.getInt("wis"),
                Cha: this.getInt("cha")
            };
        }
        ,
        StatBlockImporter.prototype.getValueAndNotes = function(selector) {
            var valueAndNotes = this.getString(selector).match(/([\d]+) ?(.*)/);
            return {
                Value: parseInt(valueAndNotes[1]),
                Notes: valueAndNotes[2] || ""
            };
        }
        ,
        StatBlockImporter.prototype.getCommaSeparatedStrings = function(selector) {
            var commaDelimitedString = this.getString(selector);
            return commaDelimitedString.length > 0 ? commaDelimitedString.split(/, ?/) : [];
        }
        ,
        StatBlockImporter.prototype.getCommaSeparatedModifiers = function(selector) {
            var entries = this.getCommaSeparatedStrings(selector);
            return entries.map(function(e) {
                var nameAndModifier = e.split(" ");
                return {
                    Name: nameAndModifier[0],
                    Modifier: parseInt(nameAndModifier[1])
                };
            });
        }
        ,
        StatBlockImporter.prototype.getPowers = function(selector) {
            return $(this.domElement).find(selector).toArray().map(function(p) {
                return {
                    Name: $(p).find("name").html(),
                    Content: $(p).find("text").map(function(i, e) {
                        return e.innerHTML;
                    }).get().join("\n"),
                    Usage: ""
                };
            });
        }
        ,
        StatBlockImporter.prototype.GetStatBlock = function() {
            var statBlock = ImprovedInitiative.StatBlock.Default();
            return statBlock.Name = this.getString("name"),
            statBlock.Type = this.getType(),
            statBlock.Abilities = this.getAbilities(),
            statBlock.HP = this.getValueAndNotes("hp"),
            statBlock.AC = this.getValueAndNotes("ac"),
            statBlock.Challenge = this.getString("cr"),
            statBlock.Speed = this.getCommaSeparatedStrings("speed"),
            statBlock.ConditionImmunities = this.getCommaSeparatedStrings("conditionImmune"),
            statBlock.DamageImmunities = this.getCommaSeparatedStrings("immune"),
            statBlock.DamageResistances = this.getCommaSeparatedStrings("resist"),
            statBlock.DamageVulnerabilities = this.getCommaSeparatedStrings("vulnerable"),
            statBlock.Senses = this.getCommaSeparatedStrings("senses"),
            statBlock.Languages = this.getCommaSeparatedStrings("languages"),
            statBlock.Skills = this.getCommaSeparatedModifiers("skill"),
            statBlock.Saves = this.getCommaSeparatedModifiers("save"),
            statBlock.Traits = this.getPowers("trait"),
            statBlock.Actions = this.getPowers("action"),
            statBlock.Reactions = this.getPowers("reaction"),
            statBlock.LegendaryActions = this.getPowers("legendary"),
            statBlock;
        }
        ,
        StatBlockImporter;
    }()
      , DnDAppFilesImporter = function() {
        function DnDAppFilesImporter() {}
        return DnDAppFilesImporter.prototype.ImportFromXml = function(xmlFile, callBack) {
            var reader = new FileReader;
            reader.onload = function(event) {
                var xml = event.target.result
                  , statBlocks = getStatBlocksFromXml(xml);
                callBack(statBlocks);
            }
            ,
            reader.readAsText(xmlFile);
        }
        ,
        DnDAppFilesImporter;
    }();
    ImprovedInitiative.DnDAppFilesImporter = DnDAppFilesImporter;
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    var appInsights = window.appInsights
      , Encounter = function() {
        function Encounter(promptQueue) {
            var _this = this;
            this.TurnTimer = new ImprovedInitiative.TurnTimer,
            this.Combatants = ko.observableArray([]),
            this.State = ko.observable("inactive"),
            this.RoundCounter = ko.observable(0),
            this.EncounterId = $("html")[0].getAttribute("encounterId"),
            this.Socket = io(),
            this.SortByInitiative = function() {
                _this.Combatants.sort(function(l, r) {
                    return r.Initiative() - l.Initiative() || r.InitiativeBonus - l.InitiativeBonus;
                }),
                _this.QueueEmitEncounter();
            }
            ,
            this.ImportEncounter = function(encounter) {
                var deepMerge = function(a, b) {
                    return $.extend(!0, {}, a, b);
                }
                  , defaultAdd = function(c) {
                    void 0 !== c.TotalInitiativeModifier && (c.InitiativeModifier = c.TotalInitiativeModifier),
                    _this.AddCombatantFromStatBlock(deepMerge(ImprovedInitiative.StatBlock.Default(), c));
                };
                encounter.Combatants && encounter.Combatants.forEach(function(c) {
                    c.Id ? $.ajax("/statblocks/" + c.Id).done(function(statBlockFromLibrary) {
                        var modifiedStatBlockFromLibrary = deepMerge(statBlockFromLibrary, c);
                        _this.AddCombatantFromStatBlock(modifiedStatBlockFromLibrary);
                    }).fail(function(_) {
                        return defaultAdd(c);
                    }) : defaultAdd(c);
                });
            }
            ,
            this.EmitEncounter = function() {
                _this.Socket.emit("update encounter", _this.EncounterId, _this.SavePlayerDisplay()),
                ImprovedInitiative.Store.Save(ImprovedInitiative.Store.AutoSavedEncounters, _this.EncounterId, _this.Save());
            }
            ,
            this.QueueEmitEncounter = function() {
                clearTimeout(_this.emitEncounterTimeoutID),
                _this.emitEncounterTimeoutID = setTimeout(_this.EmitEncounter, 10);
            }
            ,
            this.MoveCombatant = function(combatant, index) {
                var currentPosition = _this.Combatants().indexOf(combatant)
                  , newInitiative = combatant.Initiative()
                  , passedCombatant = _this.Combatants()[index];
                return index > currentPosition && passedCombatant && passedCombatant.Initiative() < combatant.Initiative() && (newInitiative = passedCombatant.Initiative()),
                index < currentPosition && passedCombatant && passedCombatant.Initiative() > combatant.Initiative() && (newInitiative = passedCombatant.Initiative()),
                _this.Combatants.remove(combatant),
                _this.Combatants.splice(index, 0, combatant),
                combatant.Initiative(newInitiative),
                _this.QueueEmitEncounter(),
                newInitiative;
            }
            ,
            this.AddCombatantFromStatBlock = function(statBlockJson, event, savedCombatant) {
                var combatant = new ImprovedInitiative.Combatant(statBlockJson,_this,savedCombatant);
                return event && event.altKey && combatant.Hidden(!0),
                _this.Combatants.push(combatant),
                _this.QueueEmitEncounter(),
                appInsights.trackEvent("CombatantAdded", {
                    Name: statBlockJson.Name
                }),
                combatant;
            }
            ,
            this.StartEncounter = function() {
                _this.SortByInitiative(),
                _this.State("active"),
                _this.RoundCounter(1),
                _this.ActiveCombatant(_this.Combatants()[0]),
                _this.TurnTimer.Start(),
                _this.QueueEmitEncounter();
            }
            ,
            this.EndEncounter = function() {
                _this.State("inactive"),
                _this.ActiveCombatant(null),
                _this.TurnTimer.Stop(),
                _this.QueueEmitEncounter();
            }
            ,
            this.RollInitiative = function(promptQueue) {
                promptQueue.Add(new ImprovedInitiative.InitiativePrompt(_this.Combatants(),_this.StartEncounter));
            }
            ,
            this.NextTurn = function() {
                appInsights.trackEvent("TurnCompleted");
                var activeCombatant = _this.ActiveCombatant()
                  , nextIndex = _this.Combatants().indexOf(activeCombatant) + 1;
                nextIndex >= _this.Combatants().length && (nextIndex = 0,
                _this.RoundCounter(_this.RoundCounter() + 1),
                _this.durationTags.forEach(function(t) {
                    return t.Decrement();
                }));
                var nextCombatant = _this.Combatants()[nextIndex];
                _this.durationTags.filter(function(t) {
                    return 0 == t.DurationRemaining() && (t.DurationCombatantId == activeCombatant.Id && t.DurationTiming == ImprovedInitiative.EndOfTurn || t.DurationCombatantId == nextCombatant.Id && t.DurationTiming == ImprovedInitiative.StartOfTurn);
                }).forEach(function(t) {
                    t.Remove(),
                    _this.durationTags.splice(_this.durationTags.indexOf(t), 1);
                }),
                _this.ActiveCombatant(nextCombatant),
                _this.TurnTimer.Reset(),
                _this.QueueEmitEncounter();
            }
            ,
            this.PreviousTurn = function() {
                var previousIndex = _this.Combatants().indexOf(_this.ActiveCombatant()) - 1;
                previousIndex < 0 && (previousIndex = _this.Combatants().length - 1,
                _this.RoundCounter(_this.RoundCounter() - 1),
                _this.durationTags.forEach(function(t) {
                    return t.Increment();
                })),
                _this.ActiveCombatant(_this.Combatants()[previousIndex]),
                _this.QueueEmitEncounter();
            }
            ,
            this.durationTags = [],
            this.AddDurationTag = function(tag) {
                _this.durationTags.push(tag);
            }
            ,
            this.Save = function(name) {
                var activeCombatant = _this.ActiveCombatant();
                return {
                    Name: name || _this.EncounterId,
                    ActiveCombatantId: activeCombatant ? activeCombatant.Id : null,
                    RoundCounter: _this.RoundCounter(),
                    Combatants: _this.Combatants().map(function(c) {
                        return {
                            Id: c.Id,
                            StatBlock: c.StatBlock(),
                            MaxHP: c.MaxHP,
                            CurrentHP: c.CurrentHP(),
                            TemporaryHP: c.TemporaryHP(),
                            Initiative: c.Initiative(),
                            Alias: c.Alias(),
                            IndexLabel: c.IndexLabel,
                            Tags: c.Tags().map(function(t) {
                                return {
                                    Text: t.Text,
                                    DurationRemaining: t.DurationRemaining(),
                                    DurationTiming: t.DurationTiming,
                                    DurationCombatantId: t.DurationCombatantId
                                };
                            }),
                            Hidden: c.Hidden(),
                            InterfaceVersion: "1.0"
                        };
                    })
                };
            }
            ,
            this.SavePlayerDisplay = function(name) {
                var hideMonstersOutsideEncounter = ImprovedInitiative.Store.Load(ImprovedInitiative.Store.User, "HideMonstersOutsideEncounter")
                  , activeCombatant = _this.ActiveCombatant()
                  , roundCounter = ImprovedInitiative.Store.Load(ImprovedInitiative.Store.User, "PlayerViewDisplayRoundCounter") ? _this.RoundCounter() : null;
                return {
                    Name: name || _this.EncounterId,
                    ActiveCombatantId: activeCombatant ? activeCombatant.Id : -1,
                    RoundCounter: roundCounter,
                    DisplayTurnTimer: ImprovedInitiative.Store.Load(ImprovedInitiative.Store.User, "PlayerViewDisplayTurnTimer"),
                    Combatants: _this.Combatants().filter(function(c) {
                        return !c.Hidden() && !(hideMonstersOutsideEncounter && "inactive" == _this.State() && !c.IsPlayerCharacter);
                    }).map(function(c) {
                        return new ImprovedInitiative.StaticCombatantViewModel(c);
                    })
                };
            }
            ,
            this.LoadSavedEncounter = function(savedEncounter, userPromptQueue) {
                savedEncounter = Encounter.updateLegacySavedEncounter(savedEncounter);
                var savedEncounterIsActive = Boolean(savedEncounter.ActiveCombatantId)
                  , currentEncounterIsActive = "active" == _this.State();
                savedEncounter.Combatants.forEach(function(c) {
                    var combatant = _this.AddCombatantFromStatBlock(c.StatBlock, null, c);
                    currentEncounterIsActive && combatant.Initiative(combatant.GetInitiativeRoll()),
                    combatant.Tags().forEach(function(tag) {
                        tag.HasDuration && _this.AddDurationTag(tag);
                    });
                }),
                currentEncounterIsActive ? _this.SortByInitiative() : (savedEncounterIsActive && (_this.State("active"),
                _this.ActiveCombatant(_this.Combatants().filter(function(c) {
                    return c.Id == savedEncounter.ActiveCombatantId;
                }).pop()),
                _this.TurnTimer.Start()),
                _this.RoundCounter(savedEncounter.RoundCounter || 1));
            }
            ,
            this.ClearEncounter = function() {
                confirm("Remove all creatures and end encounter?") && (_this.Combatants.removeAll(),
                _this.CombatantCountsByName = [],
                _this.EndEncounter());
            }
            ,
            this.Rules = new ImprovedInitiative.DefaultRules,
            this.CombatantCountsByName = [],
            this.ActiveCombatant = ko.observable(),
            this.ActiveCombatantStatBlock = ko.computed(function() {
                return _this.ActiveCombatant() ? _this.ActiveCombatant().StatBlock() : ImprovedInitiative.StatBlock.Default();
            }),
            this.Difficulty = ko.computed(function() {
                var enemyChallengeRatings = _this.Combatants().filter(function(c) {
                    return !c.IsPlayerCharacter && c.StatBlock().Challenge;
                }).map(function(c) {
                    return c.StatBlock().Challenge;
                })
                  , playerLevels = _this.Combatants().filter(function(c) {
                    return c.IsPlayerCharacter && c.StatBlock().Challenge;
                }).map(function(c) {
                    return parseInt(c.StatBlock().Challenge);
                });
                return ImprovedInitiative.DifficultyCalculator.Calculate(enemyChallengeRatings, playerLevels);
            });
            var autosavedEncounter = ImprovedInitiative.Store.Load(ImprovedInitiative.Store.AutoSavedEncounters, this.EncounterId);
            autosavedEncounter && this.LoadSavedEncounter(autosavedEncounter, promptQueue);
        }
        return Encounter;
    }();
    Encounter.updateLegacySavedCreature = function(savedCreature) {
        savedCreature.StatBlock || (savedCreature.StatBlock = savedCreature.Statblock),
        savedCreature.Id || (savedCreature.Id = probablyUniqueString());
    }
    ,
    Encounter.updateLegacySavedEncounter = function(savedEncounter) {
        savedEncounter.Combatants = savedEncounter.Combatants || savedEncounter.Creatures,
        savedEncounter.ActiveCombatantId = savedEncounter.ActiveCombatantId || savedEncounter.ActiveCreatureId,
        savedEncounter.Combatants.forEach(Encounter.updateLegacySavedCreature);
        var legacyCombatantIndex = savedEncounter.ActiveCreatureIndex;
        return void 0 !== legacyCombatantIndex && legacyCombatantIndex != -1 && (savedEncounter.ActiveCombatantId = savedEncounter.Combatants[legacyCombatantIndex].Id),
        savedEncounter;
    }
    ,
    ImprovedInitiative.Encounter = Encounter;
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    var EncounterCommander = function() {
        function EncounterCommander(encounter, promptQueue, statBlockEditor, library, eventLog, displaySettings) {
            var _this = this;
            this.encounter = encounter,
            this.promptQueue = promptQueue,
            this.statBlockEditor = statBlockEditor,
            this.library = library,
            this.eventLog = eventLog,
            this.displaySettings = displaySettings,
            this.AddStatBlockFromListing = function(listing, event) {
                listing.LoadStatBlock(function(listing) {
                    _this.encounter.AddCombatantFromStatBlock(listing.StatBlock(), event),
                    _this.eventLog.AddEvent(listing.Name() + " added to combat.");
                });
            }
            ,
            this.deleteSavedStatBlock = function(library, id) {
                ImprovedInitiative.Store.Delete(library, id),
                library == ImprovedInitiative.Store.PlayerCharacters && _this.library.PCStatBlocks.remove(function(c) {
                    return c.Id == id;
                }),
                library == ImprovedInitiative.Store.StatBlocks && _this.library.NPCStatBlocks.remove(function(c) {
                    return c.Id == id;
                });
            }
            ,
            this.saveNewStatBlock = function(store, statBlockId, newStatBlock) {
                var listing = new ImprovedInitiative.StatBlockListing(statBlockId,newStatBlock.Name,newStatBlock.Type,null,"localStorage",newStatBlock);
                ImprovedInitiative.Store.Save(store, statBlockId, newStatBlock),
                store == ImprovedInitiative.Store.PlayerCharacters ? _this.library.PCStatBlocks.unshift(listing) : _this.library.NPCStatBlocks.unshift(listing);
            }
            ,
            this.CreateAndEditStatBlock = function(library) {
                var statBlock = ImprovedInitiative.StatBlock.Default()
                  , newId = probablyUniqueString();
                "Players" == library ? (statBlock.Name = "New Player Character",
                statBlock.Player = "player",
                _this.statBlockEditor.EditStatBlock(newId, statBlock, _this.saveNewStatBlock, function() {})) : (statBlock.Name = "New Creature",
                _this.statBlockEditor.EditStatBlock(newId, statBlock, _this.saveNewStatBlock, function() {}));
            }
            ,
            this.duplicateAndEditStatBlock = function(listing) {
                var statBlock = listing.StatBlock()
                  , newId = probablyUniqueString();
                "player" == statBlock.Player ? _this.statBlockEditor.EditStatBlock(newId, statBlock, _this.saveNewStatBlock, function() {}) : _this.statBlockEditor.EditStatBlock(newId, statBlock, _this.saveNewStatBlock, function() {});
            }
            ,
            this.EditStatBlock = function(listing) {
                "server" == listing.Source ? listing.LoadStatBlock(_this.duplicateAndEditStatBlock) : _this.statBlockEditor.EditStatBlock(listing.Id, listing.StatBlock(), function(store, statBlockId, newStatBlock) {
                    ImprovedInitiative.Store.Save(store, statBlockId, newStatBlock),
                    listing.StatBlock(newStatBlock);
                }, _this.deleteSavedStatBlock);
            }
            ,
            this.ShowingLibraries = ko.observable(!0),
            this.ShowLibraries = function() {
                return _this.ShowingLibraries(!0);
            }
            ,
            this.HideLibraries = function() {
                return _this.ShowingLibraries(!1);
            }
            ,
            this.LaunchPlayerWindow = function() {
                window.open("/p/" + _this.encounter.EncounterId, "Player View");
            }
            ,
            this.ShowSettings = function() {
                ImprovedInitiative.TutorialSpy("ShowSettings"),
                _this.displaySettings(!0);
            }
            ,
            this.DisplayRoundCounter = ko.observable(ImprovedInitiative.Store.Load(ImprovedInitiative.Store.User, "DisplayRoundCounter")),
            this.DisplayTurnTimer = ko.observable(ImprovedInitiative.Store.Load(ImprovedInitiative.Store.User, "DisplayTurnTimer")),
            this.DisplayDifficulty = ko.observable(ImprovedInitiative.Store.Load(ImprovedInitiative.Store.User, "DisplayDifficulty")),
            this.StartEncounter = function() {
                return _this.promptQueue.HasPrompt() ? void _this.promptQueue.AnimatePrompt() : ("inactive" == _this.encounter.State() && (_this.encounter.RollInitiative(_this.promptQueue),
                ImprovedInitiative.ComponentLoader.AfterComponentLoaded(function() {
                    return ImprovedInitiative.TutorialSpy("ShowInitiativeDialog");
                })),
                _this.HideLibraries(),
                void _this.eventLog.AddEvent("Encounter started."));
            }
            ,
            this.EndEncounter = function() {
                _this.encounter.EndEncounter(),
                _this.eventLog.AddEvent("Encounter ended.");
            }
            ,
            this.RerollInitiative = function() {
                _this.encounter.RollInitiative(_this.promptQueue);
            }
            ,
            this.ClearEncounter = function() {
                _this.encounter.ClearEncounter(),
                _this.eventLog.AddEvent("All combatants removed from encounter.");
            }
            ,
            this.NextTurn = function() {
                _this.encounter.NextTurn();
                var currentCombatant = _this.encounter.ActiveCombatant();
                _this.eventLog.AddEvent("Start of turn for " + currentCombatant.ViewModel.DisplayName() + ".");
            }
            ,
            this.PreviousTurn = function() {
                _this.encounter.PreviousTurn();
                var currentCombatant = _this.encounter.ActiveCombatant();
                _this.eventLog.AddEvent("Initiative rewound to " + currentCombatant.ViewModel.DisplayName() + ".");
            }
            ,
            this.SaveEncounter = function() {
                var prompt = new ImprovedInitiative.DefaultPrompt("Save Encounter As: <input id='encounterName' class='response' type='text' />",function(response) {
                    var encounterName = response.encounterName;
                    if (encounterName) {
                        var savedEncounter = _this.encounter.Save(encounterName)
                          , savedEncounters = _this.library.SavedEncounterIndex;
                        savedEncounters.indexOf(encounterName) == -1 && savedEncounters.push(encounterName),
                        ImprovedInitiative.Store.Save(ImprovedInitiative.Store.SavedEncounters, encounterName, savedEncounter),
                        _this.eventLog.AddEvent("Encounter saved as " + encounterName + ".");
                    }
                }
                );
                _this.promptQueue.Add(prompt);
            }
            ,
            this.LoadEncounterByName = function(encounterName) {
                var encounter = ImprovedInitiative.Store.Load(ImprovedInitiative.Store.SavedEncounters, encounterName);
                _this.encounter.LoadSavedEncounter(encounter, _this.promptQueue),
                _this.eventLog.AddEvent("Encounter loaded.");
            }
            ,
            this.DeleteSavedEncounter = function(encounterName) {
                confirm('Delete saved encounter "' + encounterName + '"? This cannot be undone.') && (ImprovedInitiative.Store.Delete(ImprovedInitiative.Store.SavedEncounters, encounterName),
                _this.library.SavedEncounterIndex.remove(encounterName),
                _this.eventLog.AddEvent("Encounter " + encounterName + " deleted."));
            }
            ,
            this.Commands = ImprovedInitiative.BuildEncounterCommandList(this);
        }
        return EncounterCommander;
    }();
    ImprovedInitiative.EncounterCommander = EncounterCommander;
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    var EventLog = function() {
        function EventLog() {
            var _this = this;
            this.Events = ko.observableArray(),
            this.LatestEvent = ko.computed(function() {
                return _this.Events()[_this.Events().length - 1] || "Welcome to Improved Initiative!";
            }),
            this.EventsTail = ko.computed(function() {
                return _this.Events().slice(0, _this.Events().length - 1);
            }),
            this.AddEvent = function(event) {
                _this.Events.push(event),
                _this.scrollToBottomOfLog();
            }
            ,
            this.ToggleFullLog = function() {
                _this.ShowFullLog() ? (_this.ShowFullLog(!1),
                $(".combatants").css("flex-shrink", 1)) : (_this.ShowFullLog(!0),
                $(".combatants").css("flex-shrink", 0),
                _this.scrollToBottomOfLog());
            }
            ,
            this.ShowFullLog = ko.observable(!1),
            this.scrollToBottomOfLog = function() {
                var scrollHeight = $(".event-log")[0].scrollHeight;
                $(".event-log").scrollTop(scrollHeight);
            };
        }
        return EventLog;
    }();
    ImprovedInitiative.EventLog = EventLog;
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    var InitiativePrompt = function() {
        function InitiativePrompt(combatants, startEncounter) {
            var _this = this;
            this.InputSelector = ".response",
            this.ComponentName = "initiativeprompt",
            this.PlayerCharacters = [],
            this.NonPlayerCharacters = [],
            this.Resolve = function(_) {}
            ,
            this.SetDequeueCallback = function(callback) {
                return _this.dequeue = callback;
            }
            ;
            var toPrompt = function(combatant) {
                return {
                    Id: combatant.Id,
                    Prompt: combatant.ViewModel.DisplayName() + " (" + combatant.InitiativeBonus.toModifierString() + "): ",
                    PreRoll: combatant.GetInitiativeRoll()
                };
            };
            this.PlayerCharacters = combatants.filter(function(c) {
                return c.IsPlayerCharacter;
            }).map(toPrompt),
            this.NonPlayerCharacters = combatants.filter(function(c) {
                return !c.IsPlayerCharacter;
            }).map(toPrompt),
            this.Resolve = function(form) {
                var inputs = $(form).find(_this.InputSelector)
                  , responsesById = {};
                inputs.map(function(_, element) {
                    responsesById[element.id] = $(element).val();
                });
                var applyInitiative = function(combatant) {
                    var initiativeRoll = parseInt(responsesById["initiative-" + combatant.Id]);
                    combatant.Initiative(initiativeRoll);
                };
                combatants.forEach(applyInitiative),
                startEncounter(),
                ImprovedInitiative.TutorialSpy("CompleteInitiativeRolls"),
                _this.dequeue();
            };
        }
        return InitiativePrompt;
    }();
    ImprovedInitiative.InitiativePrompt = InitiativePrompt;
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    var LauncherViewModel = function() {
        function LauncherViewModel() {
            var _this = this;
            this.GeneratedEncounterId = $("html")[0].getAttribute("encounterId"),
            this.JoinEncounterInput = ko.observable(""),
            this.StartEncounter = function() {
                var encounterId = _this.JoinEncounterInput().split("/").pop();
                window.location.href = "e/" + (encounterId || _this.GeneratedEncounterId);
            }
            ,
            this.JoinEncounter = function() {
                var encounterId = _this.JoinEncounterInput().split("/").pop();
                encounterId && (window.location.href = "p/" + encounterId);
            }
            ,
            this.JoinEncounterButtonClass = function() {
                var encounterId = _this.JoinEncounterInput().split("/").pop();
                return encounterId ? "enabled" : "disabled";
            };
        }
        return LauncherViewModel;
    }();
    ImprovedInitiative.LauncherViewModel = LauncherViewModel;
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    var LibraryImporter = function() {
        function LibraryImporter() {}
        return LibraryImporter;
    }();
    LibraryImporter.Import = function(xmlDoc) {
        var library = [];
        return $(xmlDoc).find("npcdata>*").each(function(_, statBlockXML) {
            var imp = new StatBlockImporter(statBlockXML)
              , statBlock = ImprovedInitiative.StatBlock.Default();
            statBlock.Name = imp.GetString("name"),
            statBlock.Source = imp.GetString("source"),
            statBlock.Type = imp.GetJoinedStrings(["size", "type", "subtype"], " ") + ", " + imp.GetString("alignment"),
            statBlock.Description = imp.GetString("description"),
            statBlock.HP = imp.GetNotes("hp", "hd"),
            statBlock.AC = imp.GetNotes("ac", "actext"),
            statBlock.Speed = imp.GetArray("speed"),
            statBlock.Abilities = imp.GetAbilities();
            var proficiencies = imp.GetProficiencies();
            statBlock.Saves = proficiencies.Saves,
            statBlock.Skills = proficiencies.Skills,
            statBlock.ConditionImmunities = imp.GetArray("conditionimmunities"),
            statBlock.DamageImmunities = imp.GetArray("damageimmunities"),
            statBlock.DamageResistances = imp.GetArray("damageresistances"),
            statBlock.DamageVulnerabilities = imp.GetArray("damagevulnerabilities"),
            statBlock.Senses = imp.GetArray("senses"),
            statBlock.Languages = imp.GetArray("languages"),
            statBlock.Challenge = imp.GetString("cr"),
            statBlock.Traits = imp.GetUniqueTraits("traits"),
            statBlock.Actions = imp.GetUniqueTraits("actions"),
            statBlock.Reactions = imp.GetUniqueTraits("reactions"),
            statBlock.LegendaryActions = imp.GetUniqueTraits("legendaryactions"),
            library.push(statBlock);
        }),
        library;
    }
    ,
    ImprovedInitiative.LibraryImporter = LibraryImporter;
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    var LibraryViewModel = function() {
        function LibraryViewModel(EncounterCommander, library) {
            var _this = this;
            this.EncounterCommander = EncounterCommander,
            this.library = library,
            this.previewStatBlock = ko.observable(null),
            this.GetPreviewStatBlock = ko.computed(function() {
                return _this.previewStatBlock() || ImprovedInitiative.StatBlock.Default();
            }),
            this.PreviewStatBlock = function(listing) {
                _this.previewStatBlock(null),
                listing.LoadStatBlock(function(listing) {
                    _this.previewStatBlock(listing.StatBlock());
                });
            }
            ,
            this.DisplayTab = ko.observable("Creatures"),
            this.LibraryFilter = ko.observable(""),
            this.ChangeTab = function(tabName) {
                return function() {
                    "Players" === tabName && ImprovedInitiative.TutorialSpy("SelectPlayersTab"),
                    _this.DisplayTab(tabName);
                };
            }
            ,
            this.FilteredStatBlocks = ko.computed(function() {
                var filter = (ko.unwrap(_this.LibraryFilter) || "").toLocaleLowerCase()
                  , statBlocksWithFilterInName = []
                  , statBlocksWithFilterInType = []
                  , library = "Players" == _this.DisplayTab() ? ko.unwrap(_this.library.PCStatBlocks) : ko.unwrap(_this.library.NPCStatBlocks);
                return 0 == filter.length ? library : (library.forEach(function(c) {
                    return c.Name().toLocaleLowerCase().indexOf(filter) > -1 ? void statBlocksWithFilterInName.push(c) : void (c.Type.toLocaleLowerCase().indexOf(filter) > -1 && statBlocksWithFilterInType.push(c));
                }),
                statBlocksWithFilterInName.concat(statBlocksWithFilterInType));
            }),
            this.SavedEncounterIndex = library.SavedEncounterIndex;
        }
        return LibraryViewModel;
    }();
    ImprovedInitiative.LibraryViewModel = LibraryViewModel;
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    var PlayerViewModel = function() {
        function PlayerViewModel() {
            var _this = this;
            this.Combatants = ko.observableArray([]),
            this.ActiveCombatant = ko.observable(),
            this.EncounterId = $("html")[0].getAttribute("encounterId"),
            this.RoundCounter = ko.observable(),
            this.TurnTimer = new ImprovedInitiative.TurnTimer,
            this.DisplayTurnTimer = ko.observable(!1),
            this.Socket = io(),
            this.LoadEncounter = function(encounter) {
                _this.Combatants(encounter.Combatants),
                _this.DisplayTurnTimer(encounter.DisplayTurnTimer),
                _this.RoundCounter(encounter.RoundCounter),
                encounter.ActiveCombatantId != (_this.ActiveCombatant() || {
                    Id: -1
                }).Id && _this.TurnTimer.Reset(),
                encounter.ActiveCombatantId && (_this.ActiveCombatant(_this.Combatants().filter(function(c) {
                    return c.Id == encounter.ActiveCombatantId;
                }).pop()),
                setTimeout(_this.ScrollToActiveCombatant, 1));
            }
            ,
            this.LoadEncounterFromServer = function(encounterId) {
                $.ajax("../playerviews/" + encounterId).done(_this.LoadEncounter);
            }
            ,
            this.ScrollToActiveCombatant = function() {
                var activeCombatantElement = $(".active")[0];
                activeCombatantElement && activeCombatantElement.scrollIntoView(!1);
            }
            ,
            this.Socket.on("update encounter", function(encounter) {
                _this.LoadEncounter(encounter);
            }),
            this.Socket.emit("join encounter", this.EncounterId);
        }
        return PlayerViewModel;
    }();
    ImprovedInitiative.PlayerViewModel = PlayerViewModel;
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    var DefaultPrompt = function() {
        function DefaultPrompt(Query, resolve) {
            var _this = this;
            this.Query = Query,
            this.resolve = resolve,
            this.dequeue = function() {}
            ,
            this.InputSelector = ".response",
            this.ComponentName = "defaultprompt",
            this.SetDequeueCallback = function(callback) {
                return _this.dequeue = callback;
            }
            ,
            this.Resolve = function(form) {
                var inputs = $(form).find(_this.InputSelector)
                  , inputsById = {};
                inputs.map(function(_, element) {
                    inputsById[element.id] = $(element).val();
                }),
                _this.resolve(inputsById),
                _this.dequeue();
            };
        }
        return DefaultPrompt;
    }();
    ImprovedInitiative.DefaultPrompt = DefaultPrompt;
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    var PromptQueue = function() {
        function PromptQueue() {
            var _this = this;
            this.Prompts = ko.observableArray(),
            this.Add = function(prompt) {
                prompt.SetDequeueCallback(function() {
                    _this.Prompts.remove(prompt),
                    _this.HasPrompt() && $(_this.Prompts()[0].InputSelector).first().select();
                }),
                _this.Prompts.push(prompt);
            }
            ,
            this.HasPrompt = ko.pureComputed(function() {
                return _this.Prompts().length > 0;
            }),
            this.AnimatePrompt = function() {
                if (_this.HasPrompt()) {
                    var opts = {
                        duration: 200
                    }
                      , up = {
                        "margin-bottom": "+=10"
                    }
                      , down = {
                        "margin-bottom": "-=10"
                    };
                    $(".prompt").animate(up, opts).animate(down, opts).find(_this.Prompts()[0].InputSelector).first().select();
                }
            };
        }
        return PromptQueue;
    }();
    ImprovedInitiative.PromptQueue = PromptQueue;
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    var RemovableArrayValue = function() {
        function RemovableArrayValue(containingArray, Value) {
            var _this = this;
            this.containingArray = containingArray,
            this.Value = Value,
            this.Remove = function() {
                _this.containingArray.remove(_this);
            };
        }
        return RemovableArrayValue;
    }();
    ImprovedInitiative.RemovableArrayValue = RemovableArrayValue;
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    var RollResult = function() {
        function RollResult(Rolls, Modifier) {
            this.Rolls = Rolls,
            this.Modifier = Modifier;
        }
        return Object.defineProperty(RollResult.prototype, "Total", {
            get: function() {
                return this.Rolls.reduce(function(p, c) {
                    return c + p;
                }, 0) + this.Modifier;
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(RollResult.prototype, "String", {
            get: function() {
                var output = "[" + this.Rolls + "]";
                return this.Modifier > 0 && (output += " + " + this.Modifier),
                this.Modifier < 0 && (output += " - " + -this.Modifier),
                output + (" = " + this.Total);
            },
            enumerable: !0,
            configurable: !0
        }),
        RollResult;
    }();
    ImprovedInitiative.RollResult = RollResult;
    var DefaultRules = function() {
        function DefaultRules() {
            var _this = this;
            this.GetModifierFromScore = function(abilityScore) {
                return Math.floor((abilityScore - 10) / 2);
            }
            ,
            this.Check = function() {
                for (var mods = [], _i = 0; _i < arguments.length; _i++)
                    mods[_i] = arguments[_i];
                return Math.ceil(20 * Math.random()) + (mods.length ? mods.reduce(function(p, c) {
                    return p + c;
                }) : 0);
            }
            ,
            this.EnemyHPTransparency = "whenBloodied",
            this.ValidDicePattern = /(\d+)d(\d+)[\s]*([+-][\s]*\d+)?|([+-][\s]*\d+)/,
            this.RollDiceExpression = function(expression) {
                var match = _this.ValidDicePattern.exec(expression);
                if (!match)
                    throw "Invalid dice notation: " + expression;
                "string" === typeof match[4];
                if (match[4]) {
                    var modifier_1 = parseInt(match[4].replace(/[\s]*/g, ""));
                    return new RollResult([_this.Check()],modifier_1);
                }
                for (var howMany = "undefined" === typeof match[1] ? 1 : parseInt(match[1]), dieSize = parseInt(match[2]), rolls = [], i = 0; i < howMany; i++)
                    rolls[i] = Math.ceil(Math.random() * dieSize);
                var modifier = "undefined" === typeof match[3] ? 0 : parseInt(match[3].replace(/[\s]*/g, ""));
                return new RollResult(rolls,modifier);
            };
        }
        return DefaultRules;
    }();
    ImprovedInitiative.DefaultRules = DefaultRules;
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    ImprovedInitiative.Settings = function(params) {
        function cycleTipIndex() {
            var newIndex = currentTipIndex() + this;
            newIndex < 0 ? newIndex = tips.length - 1 : newIndex > tips.length - 1 && (newIndex = 0),
            currentTipIndex(newIndex);
        }
        var tips = ["You can view command list and set keybindings on the 'Commands' tab.", "Encounters built in <a href='http://kobold.club' target='_blank'>Kobold Fight Club</a> can be imported into Improved Initiative.", "Improved Initiative is in a beta state. Please periodically export your user data for safe keeping!", "You can use the player view URL to track your combat on any device.", "Editing a creature after it has been added to combat will only change that individual creature.", "You can restore a creature's hit points by applying negative damage to it.", "Temporary hit points obey the 5th edition rules- applying temporary hitpoints will ignore temporary hit points a creature already has.", "Clicking a creature holding 'alt' will hide it from the player view when adding it to combat.", "Hold the control key while clicking to select multiple combatants. You can apply damage to multiple creatures at the same time this way.", "Moving a creature in the initiative order will automatically adjust their initiative count.", "The active creature will have its traits and actions displayed first for ease of reference.", "The player view will only display a colored, qualitative indicator for Monster HP. You can change this in the settings tab.", "You can create tags that disappear after a set amount of rounds in order to automatically remove conditions at the end of a combatant's turn.", "Want to contribute? Improved Initiative is written in TypeScript and runs on node.js. Fork it at <a href='http://github.com/cynicaloptimist/improved-initiative' target='_blank'>Github.</a>"]
          , registerKeybindings = function() {
            var allCommands = params.encounterCommander.Commands.concat(params.combatantCommander.Commands);
            Mousetrap.reset(),
            Mousetrap.bind("backspace", function(e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1;
            }),
            allCommands.forEach(function(b) {
                Mousetrap.bind(b.KeyBinding, b.ActionBinding),
                ImprovedInitiative.Store.Save(ImprovedInitiative.Store.KeyBindings, b.Description, b.KeyBinding),
                ImprovedInitiative.Store.Save(ImprovedInitiative.Store.ActionBar, b.Description, b.ShowOnActionBar());
            });
        };
        registerKeybindings();
        var saveAndClose = function() {
            registerKeybindings(),
            params.settingsVisible(!1);
        }
          , currentTipIndex = ko.observable(Math.floor(Math.random() * tips.length))
          , loadSetting = function(settingName, defaultSetting) {
            var setting = ko.observable(ImprovedInitiative.Store.Load(ImprovedInitiative.Store.User, settingName) || defaultSetting);
            return setting.subscribe(function(newValue) {
                ImprovedInitiative.Store.Save(ImprovedInitiative.Store.User, settingName, newValue);
            }),
            setting;
        }
          , displayRoundCounter = loadSetting("DisplayRoundCounter");
        displayRoundCounter.subscribe(params.encounterCommander.DisplayRoundCounter);
        var displayTurnTimer = loadSetting("DisplayTurnTimer");
        displayTurnTimer.subscribe(params.encounterCommander.DisplayTurnTimer);
        var displayDifficulty = loadSetting("DisplayDifficulty");
        return displayDifficulty.subscribe(params.encounterCommander.DisplayDifficulty),
        {
            EncounterCommands: params.encounterCommander.Commands,
            CombatantCommands: params.combatantCommander.Commands,
            CurrentTab: ko.observable("about"),
            ExportData: function() {
                var blob = ImprovedInitiative.Store.ExportAll();
                saveAs(blob, "improved-initiative.json");
            },
            ImportData: function(_, event) {
                var file = event.target.files[0];
                file && ImprovedInitiative.Store.ImportAll(file);
            },
            ImportDndAppFile: function(_, event) {
                var file = event.target.files[0];
                file && ImprovedInitiative.Store.ImportFromDnDAppFile(file);
            },
            RepeatTutorial: params.repeatTutorial,
            RollHp: loadSetting("RollMonsterHp"),
            HpVerbosityOptions: ["Actual HP", "Colored Label", "Monochrome Label", "Hide All"],
            HpVerbosity: loadSetting("MonsterHPVerbosity", "Colored Label"),
            HideMonstersOutsideEncounter: loadSetting("HideMonstersOutsideEncounter"),
            AllowNegativeHP: loadSetting("AllowNegativeHP"),
            DisplayRoundCounter: displayRoundCounter,
            DisplayTurnTimer: displayTurnTimer,
            DisplayDifficulty: displayDifficulty,
            PlayerViewDisplayRoundCounter: loadSetting("PlayerViewDisplayRoundCounter", !1),
            PlayerViewDisplayTurnTimer: loadSetting("PlayerViewDisplayTurnTimer", !1),
            Tip: ko.computed(function() {
                return tips[currentTipIndex() % tips.length];
            }),
            NextTip: cycleTipIndex.bind(1),
            PreviousTip: cycleTipIndex.bind(-1),
            SaveAndClose: saveAndClose
        };
    };
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    var StatBlock = function() {
        function StatBlock() {}
        return StatBlock;
    }();
    StatBlock.Default = function(mutator) {
        var statBlock = {
            Id: "",
            Name: "",
            Source: "",
            Type: "",
            HP: {
                Value: 1,
                Notes: "1d1+0"
            },
            AC: {
                Value: 10,
                Notes: ""
            },
            InitiativeModifier: 0,
            Speed: [],
            Abilities: {
                Str: 10,
                Dex: 10,
                Con: 10,
                Cha: 10,
                Int: 10,
                Wis: 10
            },
            DamageVulnerabilities: [],
            DamageResistances: [],
            DamageImmunities: [],
            ConditionImmunities: [],
            Saves: [],
            Skills: [],
            Senses: [],
            Languages: [],
            Challenge: "",
            Traits: [],
            Actions: [],
            Reactions: [],
            LegendaryActions: [],
            Description: "",
            Player: ""
        };
        return mutator && mutator(statBlock),
        statBlock;
    }
    ,
    StatBlock.AbilityNames = ["Str", "Dex", "Con", "Cha", "Int", "Wis"],
    ImprovedInitiative.StatBlock = StatBlock;
}(ImprovedInitiative || (ImprovedInitiative = {}));
var StatBlockImporter = function() {
    function StatBlockImporter(statBlockXml) {
        var _this = this;
        this.statBlockXml = statBlockXml,
        this.GetString = function(selector) {
            return $(_this.statBlockXml).find(selector).html() || "";
        }
        ,
        this.GetJoinedStrings = function(selectors, delimiter) {
            return void 0 === delimiter && (delimiter = ", "),
            selectors.map(_this.GetString).reduce(function(p, c) {
                return p + (c ? delimiter + c : "");
            });
        }
        ,
        this.GetInt = function(selector) {
            return parseInt(_this.GetString(selector));
        }
        ,
        this.GetArray = function(selector, token) {
            void 0 === token && (token = ", ");
            var arrayLine = _this.GetString(selector);
            return arrayLine ? arrayLine.split(token) : [];
        }
        ,
        this.GetModifier = function(nameSelector, valueSelector) {
            return {
                Name: _this.GetString(nameSelector),
                Value: _this.GetInt(valueSelector)
            };
        }
        ,
        this.GetNotes = function(valueSelector, notesSelector) {
            return {
                Value: _this.GetInt(valueSelector),
                Notes: _this.GetString(notesSelector)
            };
        }
        ,
        this.ToModifierSet = function(proficiencies) {
            return proficiencies ? proficiencies.trim().split(", ").map(function(p) {
                var proficiencyWithModifier = p.split(/ [+-]/);
                return {
                    Name: proficiencyWithModifier[0].trim(),
                    Modifier: parseInt(proficiencyWithModifier[1])
                };
            }) : [];
        }
        ,
        this.GetProficiencies = function() {
            var proficiences = (_this.GetString("savingthrows") || "").split("Skills");
            _this.ToModifierSet(proficiences[1]);
            return {
                Saves: _this.ToModifierSet(proficiences[0]),
                Skills: _this.ToModifierSet(_this.GetString("skills")) || _this.ToModifierSet(proficiences[1])
            };
        }
        ,
        this.GetAbilities = function() {
            return {
                Str: parseInt(_this.GetString("abilities>strength>score") || "10"),
                Dex: parseInt(_this.GetString("abilities>dexterity>score") || "10"),
                Con: parseInt(_this.GetString("abilities>constitution>score") || "10"),
                Int: parseInt(_this.GetString("abilities>intelligence>score") || "10"),
                Wis: parseInt(_this.GetString("abilities>wisdom>score") || "10"),
                Cha: parseInt(_this.GetString("abilities>charisma>score") || "10")
            };
        }
        ,
        this.GetUniqueTraits = function(selector) {
            return $(_this.statBlockXml).find(selector).children().get().map(function(trait) {
                return {
                    Name: $(trait).find("name").html(),
                    Content: $(trait).find("desc").html().replace("\\r", "<br />"),
                    Usage: ""
                };
            });
        };
    }
    return StatBlockImporter;
}(), ImprovedInitiative;
!function(ImprovedInitiative) {
    var StatBlockLibrary = function() {
        function StatBlockLibrary() {
            var _this = this;
            this.NPCStatBlocks = ko.observableArray([]),
            this.PCStatBlocks = ko.observableArray([]),
            this.SavedEncounterIndex = ko.observableArray([]),
            this.AddStatBlockListings = function(listings) {
                listings.sort(function(c1, c2) {
                    return c1.Name.toLocaleLowerCase() > c2.Name.toLocaleLowerCase() ? 1 : -1;
                }),
                ko.utils.arrayPushAll(_this.NPCStatBlocks, listings.map(function(c) {
                    return new ImprovedInitiative.StatBlockListing(c.Id,c.Name,c.Type,c.Link,"server");
                }));
            }
            ,
            this.AddSamplePlayersFromUrl = function(url) {
                $.getJSON(url, function(json) {
                    json.forEach(function(statBlock, index) {
                        statBlock = __assign({}, ImprovedInitiative.StatBlock.Default(), statBlock),
                        _this.PCStatBlocks.push(new ImprovedInitiative.StatBlockListing(index.toString(),statBlock.Name,statBlock.Type,null,"localStorage",statBlock));
                    });
                });
            }
            ,
            ImprovedInitiative.Store.List(ImprovedInitiative.Store.SavedEncounters).forEach(function(e) {
                return _this.SavedEncounterIndex.push(e);
            }),
            ImprovedInitiative.Store.List(ImprovedInitiative.Store.PlayerCharacters).forEach(function(id) {
                var statBlock = __assign({}, ImprovedInitiative.StatBlock.Default(), ImprovedInitiative.Store.Load(ImprovedInitiative.Store.PlayerCharacters, id));
                _this.PCStatBlocks.push(new ImprovedInitiative.StatBlockListing(id,statBlock.Name,statBlock.Type,null,"localStorage",statBlock));
            }),
            0 == this.PCStatBlocks().length && this.AddSamplePlayersFromUrl("/sample_players.json"),
            ImprovedInitiative.Store.List(ImprovedInitiative.Store.StatBlocks).forEach(function(id) {
                var statBlock = __assign({}, ImprovedInitiative.StatBlock.Default(), ImprovedInitiative.Store.Load(ImprovedInitiative.Store.StatBlocks, id));
                _this.NPCStatBlocks.push(new ImprovedInitiative.StatBlockListing(id,statBlock.Name,statBlock.Type,null,"localStorage",statBlock));
            });
            var appInsights = window.appInsights;
            appInsights.trackEvent("SavedEncounters", {
                Count: this.SavedEncounterIndex().length
            }),
            appInsights.trackEvent("CustomPlayerCharacters", {
                Count: this.PCStatBlocks().length
            }),
            appInsights.trackEvent("CustomCreatures", {
                Count: this.NPCStatBlocks().length
            });
        }
        return StatBlockLibrary;
    }();
    ImprovedInitiative.StatBlockLibrary = StatBlockLibrary;
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    var StatBlockListing = function() {
        function StatBlockListing(Id, name, Type, Link, Source, statBlock) {
            var _this = this;
            this.Id = Id,
            this.Type = Type,
            this.Link = Link,
            this.Source = Source,
            this.LoadStatBlock = function(callback) {
                _this.IsLoaded ? callback(_this) : $.getJSON(_this.Link, function(json) {
                    _this.IsLoaded = !0,
                    _this.StatBlock(__assign({}, ImprovedInitiative.StatBlock.Default(), json)),
                    callback(_this);
                });
            }
            ,
            this.Name = ko.observable(name),
            this.IsLoaded = Boolean(statBlock),
            this.StatBlock = ko.observable(statBlock || ImprovedInitiative.StatBlock.Default(function(c) {
                c.Name = name;
            })),
            this.StatBlock.subscribe(function(newStatBlock) {
                _this.Name(newStatBlock.Name),
                _this.Type = newStatBlock.Type;
            });
        }
        return StatBlockListing;
    }();
    ImprovedInitiative.StatBlockListing = StatBlockListing;
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    var StatBlockEditor = function() {
        function StatBlockEditor() {
            var _this = this;
            this.EditorType = ko.observable("basic"),
            this.JsonStatBlock = ko.observable(),
            this.EditableStatBlock = ko.observable(null),
            this.HasStatBlock = ko.pureComputed(function() {
                return null !== _this.EditableStatBlock();
            }),
            this.EditStatBlock = function(statBlockId, statBlock, saveCallback, deleteCallback) {
                statBlock.Id = statBlockId,
                _this.statBlock = __assign({}, ImprovedInitiative.StatBlock.Default(), statBlock),
                _this.EditableStatBlock(_this.makeEditable(_this.statBlock)),
                _this.JsonStatBlock(JSON.stringify(_this.statBlock, null, 2)),
                _this.saveCallback = saveCallback,
                _this.deleteCallback = deleteCallback;
            }
            ,
            this.makeEditable = function(statBlock) {
                var stringLists = ["Speed", "Senses", "DamageVulnerabilities", "DamageResistances", "DamageImmunities", "ConditionImmunities", "Languages"]
                  , modifierLists = ["Saves", "Skills"]
                  , traitLists = ["Traits", "Actions", "Reactions", "LegendaryActions"]
                  , observableStatBlock = ko.mapping.fromJS(_this.statBlock)
                  , makeRemovableArrays = function(arrayNames, makeEmptyValue) {
                    for (var _loop_1 = function(arrayName) {
                        var array = observableStatBlock[arrayName];
                        array(array().map(function(item) {
                            return new ImprovedInitiative.RemovableArrayValue(array,item);
                        })),
                        array.AddEmpty = function() {
                            array.push(new ImprovedInitiative.RemovableArrayValue(array,makeEmptyValue()));
                        };
                    }, _i = 0, arrayNames_1 = arrayNames; _i < arrayNames_1.length; _i++) {
                        var arrayName = arrayNames_1[_i];
                        _loop_1(arrayName);
                    }
                };
                return makeRemovableArrays(stringLists, function() {
                    return "";
                }),
                makeRemovableArrays(modifierLists, function() {
                    return {
                        Name: ko.observable(""),
                        Modifier: ko.observable("")
                    };
                }),
                makeRemovableArrays(traitLists, function() {
                    return {
                        Name: ko.observable(""),
                        Content: ko.observable(""),
                        Usage: ko.observable("")
                    };
                }),
                observableStatBlock;
            }
            ,
            this.unMakeEditable = function(editableStatBlock) {
                for (var key in editableStatBlock) {
                    if ("HP" == key) {
                        var hpInt = parseInt(editableStatBlock[key].Value());
                        editableStatBlock[key].Value(hpInt);
                    }
                    if ("InitiativeModifier" == key) {
                        var initInt = parseInt(editableStatBlock[key]());
                        editableStatBlock[key](initInt);
                    }
                    var maybeArray = editableStatBlock[key];
                    ko.isObservable(maybeArray) && null !== maybeArray() && "function" === typeof maybeArray().push && (editableStatBlock[key] = ko.observableArray(maybeArray().map(function(e) {
                        return e.Value;
                    })));
                }
                var unObservableStatBlock = ko.toJS(editableStatBlock);
                return delete unObservableStatBlock.__ko_mapping__,
                unObservableStatBlock;
            }
            ,
            this.SaveStatBlock = function() {
                var editedStatBlock = ImprovedInitiative.StatBlock.Default();
                if ("advanced" === _this.EditorType()) {
                    try {
                        var statBlockFromJSON = JSON.parse(_this.JsonStatBlock());
                    } catch (error) {
                        return void alert("Couldn't parse JSON from advanced editor.");
                    }
                    $.extend(editedStatBlock, statBlockFromJSON);
                }
                "basic" === _this.EditorType() && $.extend(editedStatBlock, _this.unMakeEditable(_this.EditableStatBlock())),
                _this.saveCallback(_this.statBlockLibrary(), _this.statBlock.Id, editedStatBlock),
                _this.EditableStatBlock(null);
            }
            ,
            this.DeleteStatBlock = function() {
                confirm("Delete your custom statblock for " + _this.statBlock.Name + "? This cannot be undone.") && (_this.deleteCallback(_this.statBlockLibrary(), _this.statBlock.Id),
                _this.EditableStatBlock(null));
            }
            ,
            this.parseInt = function(value, defaultValue) {
                return void 0 === defaultValue && (defaultValue = null),
                /^(\-|\+)?([0-9]+|Infinity)$/.test(value) ? Number(value) : null !== defaultValue ? defaultValue : NaN;
            };
        }
        return StatBlockEditor.prototype.statBlockLibrary = function() {
            return "player" == this.statBlock.Player ? ImprovedInitiative.Store.PlayerCharacters : ImprovedInitiative.Store.StatBlocks;
        }
        ,
        StatBlockEditor;
    }();
    ImprovedInitiative.StatBlockEditor = StatBlockEditor,
    ko.components.register("editstatblock", {
        viewModel: function(params) {
            return params.editor;
        },
        template: {
            name: "editstatblock"
        }
    });
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    var Store = function() {
        function Store() {}
        return Store.List = function(listName) {
            var listKey = Store._prefix + "." + listName
              , list = Store.load(listKey);
            return list && list.constructor === Array ? list : (Store.save(listKey, []),
            []);
        }
        ,
        Store.Save = function(listName, key, value) {
            if ("string" !== typeof key)
                throw "Can't save to non-string key " + key;
            var listKey = Store._prefix + "." + listName
              , fullKey = Store._prefix + "." + listName + "." + key
              , list = Store.List(listName);
            list.indexOf(key) == -1 && (list.push(key),
            Store.save(listKey, list)),
            Store.save(fullKey, value);
        }
        ,
        Store.Load = function(listName, key) {
            var fullKey = Store._prefix + "." + listName + "." + key;
            return Store.load(fullKey);
        }
        ,
        Store.Delete = function(listName, key) {
            var listKey = Store._prefix + "." + listName
              , fullKey = Store._prefix + "." + listName + "." + key
              , list = Store.List(listName)
              , keyIndex = list.indexOf(key);
            keyIndex != -1 && (list.splice(keyIndex, 1),
            Store.save(listKey, list)),
            localStorage.removeItem(fullKey);
        }
        ,
        Store.ExportAll = function() {
            return new Blob([JSON.stringify(localStorage, null, 2)],{
                type: "application/json"
            });
        }
        ,
        Store.ImportAll = function(file) {
            var reader = new FileReader;
            reader.onload = function(event) {
                var json = event.target.result;
                try {
                    var importedStorage = JSON.parse(json);
                } catch (error) {
                    return void alert("There was a problem importing " + file.name + ": " + error);
                }
                if (confirm("Replace your Improved Initiative data with imported " + file.name + " and reload?")) {
                    localStorage.clear();
                    for (var key in importedStorage)
                        localStorage.setItem(key, importedStorage[key]);
                    location.reload();
                }
            }
            ,
            reader.readAsText(file);
        }
        ,
        Store.ImportFromDnDAppFile = function(file) {
            var _this = this
              , callback = function(statBlocks) {
                statBlocks.forEach(function(c) {
                    _this.Save(Store.StatBlocks, c.Name, c);
                });
            };
            if (confirm("Import all statblocks in " + file.name + " and reload?"))
                try {
                    (new ImprovedInitiative.DnDAppFilesImporter).ImportFromXml(file, callback),
                    location.reload();
                } catch (error) {
                    return void alert("There was a problem importing " + file.name + ": " + error);
                }
        }
        ,
        Store.ExportStatBlocks = function() {
            var statBlocks = this.List(Store.StatBlocks).map(function(id) {
                return Store.Load(Store.StatBlocks, id);
            });
            return new Blob([JSON.stringify(statBlocks, null, 2)],{
                type: "application/json"
            });
        }
        ,
        Store;
    }();
    Store._prefix = "ImprovedInitiative",
    Store.PlayerCharacters = "PlayerCharacters",
    Store.StatBlocks = "Creatures",
    Store.SavedEncounters = "SavedEncounters",
    Store.AutoSavedEncounters = "AutoSavedEncounters",
    Store.User = "User",
    Store.KeyBindings = "KeyBindings",
    Store.ActionBar = "ActionBar",
    Store.save = function(key, value) {
        return localStorage.setItem(key, JSON.stringify(value));
    }
    ,
    Store.load = function(key) {
        var value = localStorage.getItem(key);
        return "undefined" === value ? null : JSON.parse(value);
    }
    ,
    ImprovedInitiative.Store = Store;
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    ImprovedInitiative.StartOfTurn = "StartOfTurn",
    ImprovedInitiative.EndOfTurn = "EndOfTurn";
    var Tag = function() {
        function Tag(Text, combatant, duration, DurationTiming, DurationCombatantId) {
            void 0 === duration && (duration = -1),
            void 0 === DurationTiming && (DurationTiming = ImprovedInitiative.StartOfTurn),
            void 0 === DurationCombatantId && (DurationCombatantId = "");
            var _this = this;
            this.Text = Text,
            this.DurationTiming = DurationTiming,
            this.DurationCombatantId = DurationCombatantId,
            this.Decrement = function() {
                var d = _this.DurationRemaining();
                d > 0 && _this.DurationRemaining(d - 1);
            }
            ,
            this.Increment = function() {
                return _this.DurationRemaining(_this.DurationRemaining() + 1);
            }
            ,
            this.HasDuration = duration > -1,
            this.DurationRemaining = ko.observable(duration),
            this.Remove = function() {
                return combatant.Tags.remove(_this);
            };
        }
        return Tag;
    }();
    Tag.getLegacyTags = function(tags, combatant) {
        return tags.map(function(tag) {
            if (tag.Text) {
                var savedTag = tag;
                return new Tag(savedTag.Text,combatant,savedTag.DurationRemaining,savedTag.DurationTiming,savedTag.DurationCombatantId);
            }
            return new Tag(tag,combatant);
        });
    }
    ,
    ImprovedInitiative.Tag = Tag;
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    var TagPrompt = function() {
        function TagPrompt(encounter, targetCombatant, logEvent) {
            var _this = this;
            this.InputSelector = ".response",
            this.ComponentName = "tagprompt",
            this.Combatants = [],
            this.Conditions = Object.keys(ImprovedInitiative.Conditions),
            this.Resolve = function(_) {}
            ,
            this.SetDequeueCallback = function(callback) {
                return _this.dequeueCallback = callback;
            }
            ,
            this.Advanced = ko.observable(!1),
            this.ToggleAdvanced = function() {
                return _this.Advanced(!_this.Advanced());
            }
            ;
            var activeCombatantId = encounter.ActiveCombatant() ? encounter.ActiveCombatant().Id : "";
            this.Combatants = encounter.Combatants(),
            this.DisplayName = targetCombatant.ViewModel.DisplayName(),
            this.IsActive = function(combatant) {
                return combatant.Id === activeCombatantId;
            }
            ,
            this.Resolve = function(form) {
                var inputs = $(form).find(_this.InputSelector)
                  , responsesById = {};
                inputs.map(function(_, element) {
                    responsesById[element.id] = $(element).val();
                });
                var text = responsesById["tag-text"];
                if (text.length) {
                    var tag = new ImprovedInitiative.Tag(text,targetCombatant);
                    if (_this.Advanced()) {
                        var duration = parseInt(responsesById["tag-duration"])
                          , timing = "end" == responsesById["tag-timing"] ? ImprovedInitiative.EndOfTurn : ImprovedInitiative.StartOfTurn
                          , timingId = responsesById["tag-timing-id"];
                        tag = new ImprovedInitiative.Tag(text,targetCombatant,duration,timing,timingId),
                        encounter.AddDurationTag(tag);
                    }
                    targetCombatant.Tags.push(tag),
                    logEvent(_this.DisplayName + ' added note: "' + text + '"'),
                    targetCombatant.Encounter.QueueEmitEncounter();
                }
                _this.dequeueCallback();
            };
        }
        return TagPrompt;
    }();
    ImprovedInitiative.TagPrompt = TagPrompt;
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    ImprovedInitiative.TextAssets = {
        LegendaryActions: "Legendary Actions",
        DamageVulnerabilities: "Damage Vulnerabilities",
        DamageResistances: "Damage Resistances",
        DamageImmunities: "Damage Immunities",
        ConditionImmunities: "Condition Immunities"
    };
}(ImprovedInitiative || (ImprovedInitiative = {})),
Array.prototype.remove = function(item) {
    var index = this.indexOf(item);
    index > -1 && this.splice(index, 1);
}
,
Number.prototype.toModifierString = function() {
    return this >= 0 ? "+" + this : this;
}
,
String.prototype.format = function() {
    var args;
    return args = arguments[0]instanceof Array ? arguments[0] : arguments,
    this.replace(/\{\{|\}\}|\{(\d+)\}/g, function(m, n) {
        return "{{" == m ? "{" : "}}" == m ? "}" : null === args[n] || void 0 === args[n] ? "{" + n + "}" : args[n];
    });
}
,
Function.prototype.with = function() {
    for (var params = [], _i = 0; _i < arguments.length; _i++)
        params[_i] = arguments[_i];
    if ("function" !== typeof this)
        throw new TypeError("Function.prototype.with needs to be called on a function");
    var slice = Array.prototype.slice
      , args = slice.call(arguments)
      , fn = this
      , partial = function() {
        return fn.apply(this, args.concat(slice.call(arguments)));
    };
    return partial.prototype = Object.create(this.prototype),
    partial;
}
;
var PostJSON = function(url, data, success) {
    return $.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify(data),
        success: success,
        dataType: "json",
        contentType: "application/json"
    });
}, probablyUniqueString = function() {
    for (var chars = "1234567890abcdefghijkmnpqrstuvxyz", probablyUniqueString = "", i = 0; i < 8; i++) {
        var index = Math.floor(Math.random() * chars.length);
        probablyUniqueString += chars[index];
    }
    return probablyUniqueString;
}, ImprovedInitiative;
!function(ImprovedInitiative) {
    $(function() {
        if (ImprovedInitiative.RegisterComponents(),
        $("#tracker").length) {
            var viewModel = new ImprovedInitiative.TrackerViewModel;
            ko.applyBindings(viewModel, document.body),
            $.ajax("../statblocks/").done(viewModel.StatBlockLibrary.AddStatBlockListings),
            viewModel.ImportEncounterIfAvailable();
        }
        if ($("#playerview").length) {
            var encounterId = $("html")[0].getAttribute("encounterId")
              , playerViewModel = new ImprovedInitiative.PlayerViewModel;
            playerViewModel.LoadEncounterFromServer(encounterId),
            ko.applyBindings(playerViewModel, document.body);
        }
        if ($("#landing").length) {
            var launcherViewModel = new ImprovedInitiative.LauncherViewModel;
            ko.applyBindings(launcherViewModel, document.body);
        }
    });
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    var TrackerViewModel = function() {
        function TrackerViewModel() {
            var _this = this;
            this.PromptQueue = new ImprovedInitiative.PromptQueue,
            this.EventLog = new ImprovedInitiative.EventLog,
            this.StatBlockEditor = new ImprovedInitiative.StatBlockEditor,
            this.Encounter = new ImprovedInitiative.Encounter(this.PromptQueue),
            this.TutorialVisible = ko.observable(!ImprovedInitiative.Store.Load(ImprovedInitiative.Store.User, "SkipIntro")),
            this.SettingsVisible = ko.observable(!1),
            this.BlurVisible = ko.computed(function() {
                return _this.TutorialVisible() || _this.SettingsVisible();
            }),
            this.CloseSettings = function() {
                _this.SettingsVisible(!1);
            }
            ,
            this.RepeatTutorial = function() {
                _this.Encounter.EndEncounter(),
                _this.EncounterCommander.ShowLibraries(),
                _this.SettingsVisible(!1),
                _this.TutorialVisible(!0);
            }
            ,
            this.StatBlockLibrary = new ImprovedInitiative.StatBlockLibrary,
            this.EncounterCommander = new ImprovedInitiative.EncounterCommander(this.Encounter,this.PromptQueue,this.StatBlockEditor,this.StatBlockLibrary,this.EventLog,this.SettingsVisible),
            this.CombatantCommander = new ImprovedInitiative.CombatantCommander(this.Encounter,this.PromptQueue,this.StatBlockEditor,this.EventLog),
            this.ImportEncounterIfAvailable = function() {
                var encounterJSON = $("html")[0].getAttribute("postedEncounter");
                if (encounterJSON) {
                    var encounter = JSON.parse(encounterJSON);
                    _this.Encounter.ImportEncounter(encounter);
                }
            }
            ,
            this.InterfaceState = ko.computed(function() {
                return [_this.StatBlockEditor.HasStatBlock() ? "editing-statblock" : null, _this.CombatantCommander.HasSelected() ? "combatant-selected" : null, _this.EncounterCommander.ShowingLibraries() ? "showing-libraries" : null, "active" === _this.Encounter.State() ? "encounter-active" : "encounter-inactive"].filter(function(s) {
                    return s;
                }).join(" ");
            });
        }
        return TrackerViewModel;
    }();
    ImprovedInitiative.TrackerViewModel = TrackerViewModel;
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    var TurnTimer = function() {
        function TurnTimer() {
            var _this = this;
            this.elapsedSeconds = ko.observable(0),
            this.incrementElapsedSeconds = function() {
                return _this.elapsedSeconds(_this.elapsedSeconds() + 1);
            }
            ,
            this.intervalToken = null,
            this.Start = function() {
                _this.intervalToken && _this.Stop(),
                _this.intervalToken = setInterval(_this.incrementElapsedSeconds, 1e3);
            }
            ,
            this.Stop = function() {
                clearInterval(_this.intervalToken),
                _this.elapsedSeconds(0);
            }
            ,
            this.Reset = function() {
                _this.Stop(),
                _this.Start();
            }
            ,
            this.Readout = ko.pureComputed(function() {
                var time = moment.duration({
                    seconds: _this.elapsedSeconds()
                })
                  , paddedSeconds = time.seconds().toString();
                return paddedSeconds.length < 2 && (paddedSeconds = "0" + paddedSeconds),
                time.minutes() + ":" + paddedSeconds;
            });
        }
        return TurnTimer;
    }();
    ImprovedInitiative.TurnTimer = TurnTimer;
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    ImprovedInitiative.TutorialSteps = [{
        Message: "Let's start by adding a few creatures to the encounter. <strong>Click on any creature</strong> to load its stat block.",
        RaiseSelector: ".left-column",
        CalculatePosition: function(elements) {
            var left = elements.offset().left + elements.outerWidth() + 10
              , top = elements.offset().top + 200;
            return {
                left: left,
                top: top
            };
        }
    }, {
        Message: "When you're ready to add some adventurers, select the <strong>Players</strong> tab at the top of the library.",
        RaiseSelector: ".libraries .tabs span",
        AwaitAction: "SelectPlayersTab",
        CalculatePosition: function(elements) {
            var element = elements.last()
              , left = element.offset().left + element.outerWidth() + 10
              , top = element.offset().top + 5;
            return {
                left: left,
                top: top
            };
        }
    }, {
        Message: "It's easy to add your own player characters to Improved Initiative. For now, <strong>add a few sample characters</strong>.",
        RaiseSelector: ".left-column",
        CalculatePosition: function(elements) {
            var left = elements.offset().left + elements.outerWidth() + 10
              , top = elements.offset().top + 200;
            return {
                left: left,
                top: top
            };
        }
    }, {
        Message: "Press 'alt-r' or <strong>click 'Start Encounter'</strong> to roll initiative.",
        RaiseSelector: ".button.fa-play",
        AwaitAction: "ShowInitiativeDialog",
        CalculatePosition: function(elements) {
            var element = elements.last()
              , left = element.offset().left + element.outerWidth() + 10
              , top = element.offset().top + 5;
            return {
                left: left,
                top: top
            };
        }
    }, {
        Message: "Enter initiative rolls, or <strong>press enter</strong> to take the pre-rolled results.",
        RaiseSelector: ".prompt",
        AwaitAction: "CompleteInitiativeRolls",
        CalculatePosition: function(elements) {
            var element = elements.add(".combat-footer").first()
              , left = element.offset().left
              , top = element.offset().top - ($(".tutorial").outerHeight() + 10);
            return {
                left: left,
                top: top
            };
        }
    }, {
        Message: "Click 'Settings' to set keyboard shortcuts and see advanced features, or choose <strong>End Tutorial</strong>.",
        RaiseSelector: ".button.fa-gear",
        AwaitAction: "ShowSettings",
        CalculatePosition: function(elements) {
            var element = elements.last()
              , left = element.offset().left + element.outerWidth() + 10
              , top = element.offset().top + 5;
            return {
                left: left,
                top: top
            };
        }
    }];
}(ImprovedInitiative || (ImprovedInitiative = {}));
var ImprovedInitiative;
!function(ImprovedInitiative) {
    ImprovedInitiative.TutorialSpy = ko.observable(null);
    var TutorialViewModel = function() {
        function TutorialViewModel(params) {
            var _this = this;
            this.stepIndex = ko.observable(null),
            this.End = function() {
                _this.stepIndex(0),
                $(".tutorial-focus").removeClass("tutorial-focus"),
                ImprovedInitiative.Store.Save(ImprovedInitiative.Store.User, "SkipIntro", !0),
                _this.showTutorial(!1);
            }
            ,
            this.CanGoNext = ko.computed(function() {
                var stepIndex = _this.stepIndex();
                return null === stepIndex || !ImprovedInitiative.TutorialSteps[stepIndex].AwaitAction;
            }),
            this.Next = function() {
                var nextStepIndex = _this.stepIndex() + 1;
                nextStepIndex < ImprovedInitiative.TutorialSteps.length ? _this.stepIndex(nextStepIndex) : _this.End();
            }
            ,
            this.stepIndex.subscribe(function(newStepIndex) {
                $(".tutorial-focus").removeClass("tutorial-focus");
                var nextStep = ImprovedInitiative.TutorialSteps[newStepIndex]
                  , focusSelector = nextStep.RaiseSelector;
                $(focusSelector).addClass("tutorial-focus");
                var position = nextStep.CalculatePosition($(focusSelector));
                0 == newStepIndex ? $(".tutorial").css(position) : $(".tutorial").animate(position);
            }),
            ImprovedInitiative.TutorialSpy.subscribe(function(action) {
                var index = _this.stepIndex();
                index && action == ImprovedInitiative.TutorialSteps[index].AwaitAction && _this.Next();
            }),
            this.showTutorial = params.showTutorial,
            this.showTutorial() && this.stepIndex(0),
            this.showTutorial.subscribe(function(v) {
                v && _this.stepIndex(0);
            }),
            this.CurrentStep = ko.computed(function() {
                var index = _this.stepIndex();
                return null !== index ? ImprovedInitiative.TutorialSteps[index].Message : "";
            });
        }
        return TutorialViewModel;
    }();
    ImprovedInitiative.TutorialViewModel = TutorialViewModel;
}(ImprovedInitiative || (ImprovedInitiative = {}));
