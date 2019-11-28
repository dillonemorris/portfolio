import React from 'react'

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div>
      <div>{icon}</div>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  )
}

export default FeatureCard
