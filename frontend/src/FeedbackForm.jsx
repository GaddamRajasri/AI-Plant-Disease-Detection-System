import React, { useState } from 'react';
import axios from 'axios';

function FeedbackForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/feedback', { name, message });
      setSuccess('Feedback submitted successfully!');
      setName('');
      setMessage('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setSuccess('Error submitting feedback.');
    }
  };

  const styles = {
    container: {
      width: '1000px',
      margin: '50px auto',
      height:'500px',
      padding: '30px',
      borderRadius: '10px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backgroundImage: `url("/image.jpeg")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      fontFamily: "'Arial', sans-serif",
      transition: 'max-width 0.3s ease',
    },
    '@media (min-width: 1024px)': {
      container: {
        maxWidth: '1000px',
      },
    },
    '@media (min-width: 1440px)': {
      container: {
        maxWidth: '1200px',
        padding: '40px',
      },
    },
    title: {
      fontSize: '60px',
      marginBottom: '40px',
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
      fontFamily:'system-ui',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    input: {
      width: '300px',
      padding: '15px',
      margin:'auto',
      color:'black',
      marginBottom: '40px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '20px',
      backgroundColor:'#dee063',
    },
    textarea: {
      width: '500px',
      padding: '15px',
      margin:'auto',
      marginBottom: '40px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '18px',
      resize: 'none',
      height: '80px',
      backgroundColor:'#dee063',
    },
    button: {
      backgroundColor: '#007bff',
      width:'120px',
      margin:'auto',
      color: '#fff',
      border: 'none',
      padding: '15px',
      borderRadius: '20px',
      fontSize: '20px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#2b5426',
      color:'white',
      fontSize:'25px',
      
    },
    message: (isError) => ({
      fontSize: '18px',
      textAlign: 'center',
      marginTop: '15px',
      color: isError ? 'red' : 'white',
    }),
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Feedback Form</h1>
      {success && (
        <p style={styles.message(success.includes('Error'))}>{success}</p>
      )}
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />
        <textarea
          placeholder="Your Feedback"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.textarea}
          required
        ></textarea>
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = styles.button.backgroundColor)
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;

