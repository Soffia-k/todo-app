<h1 align="center">Welcome to todo-list 👋</h1>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white">
  <img alt="Zustand" src="https://img.shields.io/badge/Zustand-state-2C3E50">
  <img alt="Ant Design" src="https://img.shields.io/badge/Ant%20Design-UI-0170FE?logo=antdesign&logoColor=white">
  <img alt="dayjs" src="https://img.shields.io/badge/dayjs-dates-FF5F5F">
</p>

<p align="center">
  <b>An app for managing daily tasks and progress tracking.</b><br>
  Built with React, Zustand and Ant Design.
</p>

---

## ✨ Features

- ➕ Add tasks with a required deadline
- ✅ Mark tasks as done / undone
- 🗑️ Delete tasks
- 📅 Deadline picker with a default date (+7 days from current)
- ⚠️ Form validation powered by Ant Design `Form`
- 🧠 State management with Zustand

---

## How it works

The app is split into two clear responsibilities:

- **Ant Design `Form`** owns the *current input* — what the user is typing right now.
- **Zustand store** owns the *task list* — the data that survives re-renders and is shared across the app.

## Task object structure:
```
{
  id: number,
  taskName: string,
  status: 'new' | 'done',
  dateFinished: string,   // '' or timestamp
  deadline: string        // ISO date
}
```
## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## Author

👤 **Sofia**

* Github: [@Soffia-k](https://github.com/Soffia-k)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_