import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const alreadyLoggedIn = sessionStorage.getItem("auth_user");
  if (alreadyLoggedIn) {
    navigate("/dashboard");
  }

  // NOTE: states للـ inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // NOTE: state لرسالة الخطأ
  const [error, setError] = useState("");

  // NOTE: بيانات الأدمن (مؤقتة)
  const ADMIN_EMAIL = "admin@mastery.com";
  const ADMIN_PASSWORD = "123456";

  const handleSubmit = (e) => {
    e.preventDefault();

    // NOTE: validation بسيط (اختياري)
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    // NOTE: check email/password
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setError("");

      // NOTE: بنعمل object لبيانات المستخدم اللي هنخزنها في sessionStorage
      const userData = {
        name: "Ali Hamada",
        role: "ADMIN",
        email: ADMIN_EMAIL,
      };

      // NOTE: sessionStorage بيخزن string فقط => لازم JSON.stringify
      sessionStorage.setItem("auth_user", JSON.stringify(userData));

      // NOTE: بعد ما نخزن => نروح للداشبورد
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <section className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h1 className={styles.title}>Admin Login</h1>
        <p className={styles.subtitle}>
          Sign in to access the academy dashboard
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              placeholder="admin@mastery.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>
            <input
              type="password"
              placeholder="123456"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* NOTE: لو فيه خطأ يظهر هنا */}
          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
