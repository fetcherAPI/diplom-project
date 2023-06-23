import { Title } from "shared/ui/Title";
import classes from "./VacancyPage.module.scss";
import { Vacancy } from "entity/Vacancy";
import { VacancyAPI } from "entity/CreateVacancy/api/VacancyAPI";
import { useEffect, useState } from "react";

export const VacancyPage = () => {
  const [data, setData] = useState<Array<any>>([]);

  const [isLoading, setIsLoading] = useState(false);

  const handleGetNews = async () => {
    setIsLoading(true);
    try {
      const res = await VacancyAPI.getVacancy();
      console.log("res.data", res.data);
      setData(res.data.vacancys);
    } catch (err) {
      console.log("err", err);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!data.length) {
      handleGetNews();
    }
  }, []);
  return (
    <div className={classes.VacancyPage}>
      <Title>Вакансии</Title>
      {isLoading ? (
        <p>Загрузка данных...</p>
      ) : (
        data.map((vacancy) => <Vacancy key={vacancy.id} {...vacancy} />)
      )}
    </div>
  );
};
