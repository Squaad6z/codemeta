import React from 'react'
import './projet.css'

const Projet = () => {
  return (
    <section className='projet'>
    <section className='container_projet'>
        <h2>Vous avez un projet ? </h2>
        <button className='contact_button'><a href='/contact'>Contactez-moi</a></button>
        <img className='background_projet' alt='image contact' src='./images/banniere.webp'></img>
    </section>
    <section className='card_projet'>
        <div className='contact' id='me_contacter'>
          <h3>CONTACT</h3>
          <p>Prêt à démarrer votre projet?</p>
          <p>Envoyez-moi un message pour discuter de vos besoins.</p>
          <button className='contact_button'><a href='/contact'>Contactez-moi</a></button>
        </div>
        <div className='contact' id='mes_services'>
          <h3>SERVICES</h3>
          <p>Conception Web et Développement</p>
          <p>Optimisation de l'Expérience Utilisateur</p>
          <p>Consultation en Stratégie Numérique</p>
        </div>
        <div className='contact' id='me_suivre'>
          <h3>SUIS-MOI</h3>
          <p>Suivez-moi sur <a href="https://www.linkedin.com/in/steven-carneiro-moreira-742626264/">LinkedIn</a></p>
          <p>Consultez mes projets sur <a href="https://github.com/Squaad6z">GitHub</a></p>
          <p>Suivez-moi sur <a href="https://www.facebook.com/profile.php?id=61553609851196">Facebook</a></p>
          <p>Suivez-moi sur <a href="https://www.instagram.com/codemeta.solutions/">Instagram</a></p>
        </div>
    </section>
    </section>
  )
}

export default Projet