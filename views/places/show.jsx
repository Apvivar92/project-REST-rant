const React = require("react");
const comment = require("../../models/comment");
const Def = require("../default");

function show(data) {
  let comments = <h3 className="inactive">No comments yet!</h3>;
  if (data.place.comments.length) {
    comments = data.place.comments.map((comment) => {
      return (
        <div className="border">
          <h2 className="rant">{comment.rant ? "Rant!" : "Rave"}</h2>
          <h4>{comment.content}</h4>
          <h3>
            <strong>- {comment.author}</strong>
          </h3>
          <h4>Rating: {comment.stars}</h4>
        </div>
      );
    });
  }
  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <img
              className="img-fluid"
              src={data.place.pic}
              alt={data.place.name}
            />
          </div>
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>
            <div>
              <h2>Rating</h2>
              <p>Not Rated</p>
            </div>
            <div>
              <h2>Desciption</h2>
              <p>
                Located in {data.place.city}, {data.place.state}
                <br />
                Serving {data.place.cuisines}
              </p>
            </div>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
              Edit
            </a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
          </div>
          <hl />
          <div className="row">
            <h2>
              <br />
              Comments
            </h2>
            <p>No comments yet!</p>
            {comments}
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
