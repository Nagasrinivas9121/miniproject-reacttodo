import React from "react";

function Home() {
  return (
    <div>

      
      <section style={{
        textAlign:"center",
        padding:"80px",
        background:"linear-gradient(to right,#667eea,#764ba2)",
        color:"white"
      }}>
        <h1>Welcome to My Website</h1>
        <p>Build amazing apps with React</p>
        <button style={{
          padding:"10px 20px",
          border:"none",
          background:"white",
          color:"#333",
          marginTop:"20px"
        }}>
          Get Started
        </button>
      </section>

      {/* Features */}
      <section style={{
        display:"flex",
        justifyContent:"space-around",
        padding:"60px"
      }}>

        <div style={{
          width:"250px",
          padding:"20px",
          boxShadow:"0 0 10px #ccc",
          textAlign:"center"
        }}>
          <h3>Fast</h3>
          <p>Lightning fast React applications.</p>
        </div>

        <div style={{
          width:"250px",
          padding:"20px",
          boxShadow:"0 0 10px #ccc",
          textAlign:"center"
        }}>
          <h3>Responsive</h3>
          <p>Works perfectly on all devices.</p>
        </div>

        <div style={{
          width:"250px",
          padding:"20px",
          boxShadow:"0 0 10px #ccc",
          textAlign:"center"
        }}>
          <h3>Secure</h3>
          <p>Safe and secure applications.</p>
        </div>

      </section>

      
      <footer style={{
        background:"#333",
        color:"white",
        textAlign:"center",
        padding:"20px"
      }}>
        <p>© 2026 My React Website</p>
      </footer>

    </div>
  );
}

export default Home;