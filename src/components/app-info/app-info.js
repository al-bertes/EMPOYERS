import "./app-info.css";

const AppInfo = ({increaseNumber, countEmpoyes}) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {countEmpoyes}</h2>
      <h2>Премию получат: {increaseNumber}</h2>
    </div>
  )
}

export default AppInfo;