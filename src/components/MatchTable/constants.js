import { Tag } from "antd";

export const columns = [
  {
    title: "Дата",
    dataIndex: "date",
    key: "date",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Время",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Статус",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "red" : "green";
          if (tag === "SCHEDULED") {
            color = "blue";
          }

          return (
            <Tag color={color} key={tag}>
              {statusMatches[tag].toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Команды",
    dataIndex: "teams",
    key: "teams",
  },
  {
    title: "Счет",
    dataIndex: "score",
    key: "score",
  },
];

export const statusMatches = {
  SCHEDULED: "Запланирован",
  LIVE: "В прямом эфире",
  IN_PLAY: "В игре",
  PAUSED: "Пауза",
  FINISHED: "Завершён",
  POSTPONED: "Отложен",
  SUSPENDED: "Приостановлен",
  CANCELED: "Отменён",
};
