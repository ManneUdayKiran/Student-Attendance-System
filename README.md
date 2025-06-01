
## 📘 Attendance Management System

A web-based application for managing student attendance built using **React** (Vite) for the frontend and **Node.js / Express** for the backend.

---

### 🚀 Features

* Record attendance (Present/Absent)
* View all student attendance records
* Responsive user interface
* RESTful API integration

---

### 🛠️ Tech Stack

* **Frontend**: React + Vite
* **Backend**: Node.js, Express
* **Database**: MongoDB (or your choice)
* **HTTP Client**: Axios

---

### 📦 Installation

#### 1. Clone the repository

```bash
git clone https://github.com/ManneUdayKiran/attendance-management.git
cd attendance-management
```

#### 2. Install dependencies

```bash
npm install
```

#### 3. Start the frontend (Vite)

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

#### 4. Start the backend (in `server/` or similar folder)

```bash
cd server
npm install
npm run dev
```

The backend will run on `http://localhost:5000`.

---

### 🌐 API Endpoints

| Method | Endpoint              | Description                   |
| ------ | --------------------- | ----------------------------- |
| POST   | `/api/attendance/add` | Record a student’s attendance |
| GET    | `/api/attendance/all` | Fetch all attendance records  |

---

### 📁 Project Structure

```
attendance-management/
├── client/       # React frontend
├── server/       # Express backend
├── README.md
├── package.json
```

---

### 🧪 Example Form State

```json
{
  "studentId": "12345",
  "studentName": "John Doe",
  "present": true
}
```

---

### 📤 Deployment

For deploying to platforms like **Render**:

#### 1. Update package.json

```json
"scripts": {
  "build": "vite build",
  "start": "vite preview --host 0.0.0.0 --port $PORT"
}
```

#### 2. Render Start Command

```bash
npm run build && npm run start
```

---

### 📄 License

This project is licensed under the MIT License.
