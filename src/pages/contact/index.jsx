import React from 'react'
import { Container, Content } from '../../contact/style'
import { FaLinkedin, FaInstagram, FaEnvelope, FaTwitter } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <a href="https://www.linkedin.com/in/caduhdev/" target="_blank" rel="noreferrer">
          <ItemContact
            IconFa={FaLinkedin} 
            LinkContact="https://www.linkedin.com/in/caduhdev/" 
          />
        </a>

        <a href="http://www.twitter.com/CaduhMourao" target="_blank" rel="noopener noreferrer">
          <ItemContact 
            IconFa={FaTwitter} 
            LinkContact="https://www.twitter.com/CaduhMourao" 
          />
        </a>

        <a href="http://www.instagram.com/caduhmourao" target="_blank" rel="noopener noreferrer">
          <ItemContact 
            IconFa={FaInstagram} 
            LinkContact="https://www.instagram.com/caduhmourao" 
          />
        </a>
        
        <a href="mailto:caduh.dev@gmail.com" target="_blank" rel="noopener noreferrer">
          <ItemContact 
            IconFa={FaEnvelope} 
            LinkContact="caduh.dev@gmail.com" 
          />
        </a>
      </Content>
    </Container>
  )
}