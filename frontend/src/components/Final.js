const Final = ({ isCorrect, solution }) => {

    return (
      <div className="finalModal">
        {isCorrect ? (
          <div>
            <h1>You win!</h1>
            <button className="play-again" onClick={()=>window.location.reload()
}>Play Again</button>
            <p className="solution">{solution}</p>
          </div>
        ) : (
          <div>
            <h1>Better luck next time!</h1>
            <button className="play-again" onClick={()=>window.location.reload()}>Play Again</button>
            <p className="solution">{solution}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default Final;
  