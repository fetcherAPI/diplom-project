import "app/styles/App.scss";
import { Suspense, useEffect } from "react";
import { Header } from "widgets/Header";
import { AppRouter } from "app/providers/router";
import { Footer } from "widgets/Footer";
import api from "shared/config/axiosCongig/axiosCongig";

function App() {
  const handleGetNews = async () => {
    const res = await api.get("/vacancy");
    console.log("res ", res);
  };

  useEffect(() => {
    handleGetNews();
  }, []);

  return (
    <div className="app dark">
      <Suspense fallback="Загрузка...">
        <Header />
        <AppRouter />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
