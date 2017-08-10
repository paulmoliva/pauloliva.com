import json

import requests

import pymysql


def fetch_all():
    resp = requests.get('http://www.improved-initiative.com/statblocks')

    return json.loads(resp.text)


def load_to_db(connection):
    all_statblocks = fetch_all()

    all_full_blocks = []

    for each_block in all_statblocks:
        resp = requests.get('http://www.improved-initiative.com/{0}'.format(each_block.get('Link')))
        each_block['json'] = resp.text

        with connection.cursor() as cursor:
            # Create a new record
            sql = """
                INSERT INTO `monsters` (`Link`, `Name`, `Type`, `Id`, `json`)
                VALUES (%s, %s, %s, %s, %s)
            """.format(
                link=each_block['Link'],
                name=each_block['Name'],
                type=each_block['Type'],
                Id=each_block['Id'],
                json=each_block['json']
            )
            cursor.execute(sql, (each_block['Link'], each_block['Name'], each_block['Type'], each_block['Id'], each_block['json']))
            print(json.dumps(each_block) + "Inserted to db.")

    connection.commit()
    connection.close()

    return all_full_blocks


def connect():
    connection = pymysql.connect(host='us-cdbr-iron-east-04.cleardb.net',
                                 user='b4d91cbbb15e57',
                                 password='3eeedb3b',
                                 db='heroku_58134df4e01892c',
                                 charset='utf8mb4',
                                 cursorclass=pymysql.cursors.DictCursor)

    return connection

load_to_db(connect())
