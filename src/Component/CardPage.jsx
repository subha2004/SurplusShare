
import React from 'react';
import Card from './Card';
import './Card.css';

const CardPage = () => {
  
  const cardsData = [
    {
      
      content: '"Reducing food wastage and feeding the hungry, one meal at a time. Join us in our mission to make sure no one goes to bed hungry."',
      imageUrl: 'https://img.freepik.com/premium-photo/volunteers-preparing-serving-meals-generative-ai_986034-3468.jpg',
    },
    {
      
      content: '"With the support of generous donors and tireless volunteers, we turn surplus food into hope and nourishment for the needy."',
      imageUrl: 'https://www.municipioassessoria.com/wp-content/uploads/2023/10/cozinha-solidaria-em-sao-bernardo-visa-garantir-seguranca-alimentar.jpeg',
    },
    {
      
      content: '"Every meal we serve is a step towards a more caring and compassionate community. Help us make a difference, one plate at a time."',
      imageUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/03/18/17/istock-1127566187.jpg',
    },
    {
        
        content: '"Volunteers collecting surplus food and distributing meals at 7 PM every day—because everyone deserves a nutritious meal and a sense of security."',
        imageUrl: 'https://ak.picdn.net/shutterstock/videos/1093336513/thumb/11.jpg?ip=x480',
      },
      {
        
        content: '"By turning surplus food into life-sustaining meals, we not only combat hunger but also promote a culture of giving and volunteering."',
        imageUrl: 'https://preview.redd.it/r8s4nfvljpe51.jpg?width=640&crop=smart&auto=webp&s=aec38ae639be895969e0f44d89af6212418839fc',
      },
      {
       
        content: '"Join us in making a tangible difference. Together, we can ensure that surplus food reaches the needy, creating a cycle of care and community support."',
        imageUrl: 'https://www.epa.gov/sites/default/files/styles/medium/public/2015-11/manpic.jpg?itok=YnvEqbSe',
      },
      {
       
        content: '"Every donation helps cover the logistics, packaging, and ingredients needed to provide nutritious meals. Be a part of the 7 O Clock Scheme and spread the joy of giving."',
        imageUrl: 'https://media.istockphoto.com/id/941788480/photo/portrait-of-girl-kid-having-mid-day-meal-in-indian-school.jpg?s=612x612&w=0&k=20&c=tdMRbWtA9rtYSE_6EpXpSl5E4d4xdvqK7egdYd_Q_MM=',
      },
      {
       
        content: '"From donors to volunteers to those we serve, the 7 O Clock Scheme builds a stronger, more caring community, addressing hunger and fostering a spirit of generosity."',
        imageUrl: 'https://imgmedia.lbb.in/media/2019/07/5d317dc254656206ccb9510c_1563524546595.jpg',
      },
      {
        
        content: '"Every evening at 7 PM, our dedicated volunteers bring security and stability to those in need by distributing freshly prepared meals across various communities."',
        imageUrl: 'https://www.blessingsofhope.com/wp-content/uploads/2019/06/Volunteers.jpg',
      },
   
  ];
  

  return (
    <div className='card-body'>
      <h2>Plans</h2>
    <div className="card-page">
      <div className="card-row">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default CardPage;
