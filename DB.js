import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('tasks.db');

export default class DBService {
  static init() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS newtable (id INTEGER PRIMARY KEY NOT NULL, content TEXT NOT NULL)', [], resolve, (_, error) => reject(error));
      });
    });
  }

  static deletedb() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql('DROP TABLE tasks)', [], resolve, (_, error) => reject(error));
      });
    });
  }

  static getTasks() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM newtable',
          [],
          (_, result) => resolve(result.rows._array),
          (_, error) => reject(error)
        );
      });
    });
  }

  static additTask({ content }) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `INSERT INTO newtable (content) VALUES (?)`,
          [content],
          (_, result) => resolve(result.insertId),
          (_, error) => reject(error)
        );
      });
    });
  }

  static updateTask(newTask) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql('UPDATE newtable SET content = ? WHERE id = ?', [newTask.content, newTask.id], resolve, (_, error) => reject(error));
      });
    });
  }

  static removeTask({ id }) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql('DELETE FROM newtable WHERE id = ?', [id], resolve, (_, error) => reject(error));
      });
    });
  }
}
