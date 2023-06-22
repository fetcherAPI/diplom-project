import { Title } from "shared/ui/Title";
import classes from "./VacancyPage.module.scss";
import { Vacancy } from "entity/Vacancy";

const vacancys = [
  {
    id: "1",
    vacancyName: "менеджер по продажам",
    vacancyDescription:
      "Открыта вакансия на должность менеджера по продажам строительно-отделочых материалов.",
    vacancyRequirements: [
      "Высшее образование",
      "Стрессоустойчивость",
      "Знание Microsoft Office",
    ],
    vacancyConditions: [
      "Оклад + премия",
      "График работы 5/2, 8:00-17:00",
      "Официальное трудоустройство",
    ],
    vacancyResponsibilities: [
      "Ведение документооборота с клиентами",
      "Обработка входящих заявок (эл.почта, телефон)",
      "Информационная поддержка торговых представителей",
    ],
  },
  {
    id: "3",
    vacancyName: "менеджер по продажам",
    vacancyDescription:
      "Открыта вакансия на должность менеджера по продажам строительно-отделочых материалов.",
    vacancyRequirements: [
      "Высшее образование",
      "Стрессоустойчивость",
      "Знание Microsoft Office",
    ],
    vacancyConditions: [
      "Оклад + премия",
      "График работы 5/2, 8:00-17:00",
      "Официальное трудоустройство",
    ],
    vacancyResponsibilities: [
      "Ведение документооборота с клиентами",
      "Обработка входящих заявок (эл.почта, телефон)",
      "Информационная поддержка торговых представителей",
    ],
  },
  {
    id: "4",
    vacancyName: "менеджер по продажам",
    vacancyDescription:
      "Открыта вакансия на должность менеджера по продажам строительно-отделочых материалов.",
    vacancyRequirements: [
      "Высшее образование",
      "Стрессоустойчивость",
      "Знание Microsoft Office",
    ],
    vacancyConditions: [
      "Оклад + премия",
      "График работы 5/2, 8:00-17:00",
      "Официальное трудоустройство",
    ],
    vacancyResponsibilities: [
      "Ведение документооборота с клиентами",
      "Обработка входящих заявок (эл.почта, телефон)",
      "Информационная поддержка торговых представителей",
    ],
  },
  {
    id: "5",
    vacancyName: "менеджер по продажам",
    vacancyDescription:
      "Открыта вакансия на должность менеджера по продажам строительно-отделочых материалов.",
    vacancyRequirements: [
      "Высшее образование",
      "Стрессоустойчивость",
      "Знание Microsoft Office",
    ],
    vacancyConditions: [
      "Оклад + премия",
      "График работы 5/2, 8:00-17:00",
      "Официальное трудоустройство",
    ],
    vacancyResponsibilities: [
      "Ведение документооборота с клиентами",
      "Обработка входящих заявок (эл.почта, телефон)",
      "Информационная поддержка торговых представителей",
    ],
  },
];

export const VacancyPage = () => {
  return (
    <div className={classes.VacancyPage}>
      <Title>Вакансии</Title>
      {vacancys.map((vacancy) => (
        <Vacancy key={vacancy.id} {...vacancy} />
      ))}
    </div>
  );
};