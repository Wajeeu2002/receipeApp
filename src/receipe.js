export default function Receipe({ title, img, ingredient }) {
  return (
    <div className="card">
      <img className="img" src={img} alt="" />
      <ul className="head">
        <h1>{title}</h1>
        <h4>ingredients: </h4>
        {ingredient.map((food, index) => {
          return (
            <li className="list" key={index}>
              {food.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
