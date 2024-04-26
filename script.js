let data = [
  {
    anchor: "Getting started with the web",url:"https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web",
    para: "Provides a practical introduction to web development for complete beginners.",
  },

  {
    anchor: "HTML — Structuring the web",url:"https://developer.mozilla.org/en-US/docs/Learn/HTML",
    para: "HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.",
  },

  {
    anchor: "CSS - Styling the web",url:"https://developer.mozilla.org/en-US/docs/Web/CSS",
    para: "CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.",
  },
];




// import head from "./head.css";

function Article() {
  //  console.log(ele);

  
  const styless = {
    paddingLeft: '15px',
    // color:"red"
    // Adjust the value as needed
  };


  return (
    <article>
      {data.map((ele) => {
        return (
          <div className="inner_div">
            <a href={ele.url} target="_blank">{ele.anchor}</a>
            <p style={styless}>{ele.para}</p>
          </div>
        );
      })}
    </article>
  );
}

const Heading = () => {
  // console.log(data);

  return (
    <div>
      <div id="top" style ={{marginBottom:"40px"}}>
        <h1>Topics covered</h1>
        <p>
          The following is a list of all the topics we cover in the MDN learning
          area.
        </p>
      </div>
      <Article />
    </div>
  );
};

const myDiv = document.getElementById("react_div");

ReactDOM.render(<Heading />, myDiv);
