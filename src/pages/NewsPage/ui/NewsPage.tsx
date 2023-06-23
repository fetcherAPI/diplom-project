import { useState, useEffect } from "react";
import { Title } from "shared/ui/Title";
import classes from "./News.module.scss";
import { News } from "entity/News";
import { NewsAPI } from "entity/CreateNew/api/NewsAPI";
import { INewaProps } from "entity/News/ui/News";

export const NewsPage = () => {
  const [data, setData] = useState<Array<INewaProps>>([]);

  const [isLoading, setIsLoading] = useState(false);

  const handleGetNews = async () => {
    setIsLoading(true);
    try {
      const res = await NewsAPI.getNews();
      console.log("res.data", res.data);
      setData(res.data.news);
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
      <Title>Новости</Title>
      {isLoading ? (
        <p>Загрузка данных...</p>
      ) : (
        data.map((data) => <News key={data._id} {...data} />)
      )}
    </div>
  );
};
