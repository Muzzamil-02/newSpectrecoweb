import React from "react";

import "../Maincss.css"


const Phases = () => {
    const cardsData = [
        {
          title: "Planning and Development",
          content: [
            {
                subtitle: "Environmental Assessment:",
                description: " Conduct comprehensive environmental impact assessments to identify potential ecological risks and opportunities.",
            },
            {
                subtitle: "Environmental Assessment:",
                description: " Conduct comprehensive environmental impact assessments to identify potential ecological risks and opportunities.",
            },
            {
                subtitle: "Environmental Assessment:",
                description: " Conduct comprehensive environmental impact assessments to identify potential ecological risks and opportunities.",
            },
            {
                subtitle: "Environmental Assessment:",
                description: " Conduct comprehensive environmental impact assessments to identify potential ecological risks and opportunities.",
            },
            {
                subtitle: "Environmental Assessment:",
                description: " Conduct comprehensive environmental impact assessments to identify potential ecological risks and opportunities.",
            },
            
        ],
          
          imageURL: "../images/hero-2.png",
        },
        {
          title: "Planning and Development",
          content: [
            {
                subtitle: "Environmental Assessment:",
                description: " Conduct comprehensive environmental impact assessments to identify potential ecological risks and opportunities.",
            },
            {
                subtitle: "Environmental Assessment:",
                description: " Conduct comprehensive environmental impact assessments to identify potential ecological risks and opportunities.",
            },
            {
                subtitle: "Environmental Assessment:",
                description: " Conduct comprehensive environmental impact assessments to identify potential ecological risks and opportunities.",
            },
            {
                subtitle: "Environmental Assessment:",
                description: " Conduct comprehensive environmental impact assessments to identify potential ecological risks and opportunities.",
            },
            {
                subtitle: "Environmental Assessment:",
                description: " Conduct comprehensive environmental impact assessments to identify potential ecological risks and opportunities.",
            },
            
        ],
          
        imageURL: "../images/hero-2.png",
    },
        {
          title: "Planning and Development",
          content: [
            {
                subtitle: "Environmental Assessment:",
                description: " Conduct comprehensive environmental impact assessments to identify potential ecological risks and opportunities.",
            },
            {
                subtitle: "Environmental Assessment:",
                description: " Conduct comprehensive environmental impact assessments to identify potential ecological risks and opportunities.",
            },
            {
                subtitle: "Environmental Assessment:",
                description: " Conduct comprehensive environmental impact assessments to identify potential ecological risks and opportunities.",
            },
            {
                subtitle: "Environmental Assessment:",
                description: " Conduct comprehensive environmental impact assessments to identify potential ecological risks and opportunities.",
            },
            {
                subtitle: "Environmental Assessment:",
                description: " Conduct comprehensive environmental impact assessments to identify potential ecological risks and opportunities.",
            },
            
        ],
          
        imageURL: "../images/hero-2.png",
    },
       
      ];

      return (
        <div style={{ padding: "20px", borderRadius: "10px",marginTop:"40px",marginBottom:"40px" }}>
      <h2 style={{padding:"20px"}}>Key  Sustainability Integration Across All Industry <span style={{color: "#bc1823"}}>Phases</span></h2>
        {cardsData.map((card, index) => (
            <div className="grid-container">

                <div className="left-panel image">
                    <div className="vertical-line"></div>
                    <img src={card.imageURL} alt="ESG Dashboard"  style={{height: "min-content",}} />
                </div>

                <div className="right-panel">
                    <p className="title">
                        {card.title}
                    </p>
                    <ul >
                    {card.content.map((listItem, index)=> 
                        <li >
                             <p className="subtitle" style={{color: "#bc1823", fontWeight: "400" }}>
                             {listItem.subtitle} <span style={{color: 'black', fontWeight:"300"}}>{listItem.description}</span></p>
                            
                        </li>
                    )}
                    </ul>
                </div>
            </div>

        ))}
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Learn More
      </button>
    </div>
      );


}

export default Phases;