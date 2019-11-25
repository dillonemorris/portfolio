import React from 'react'
import { Container, Date, Title, Excerpt } from './styles'

const BlogPostCard = ({ date, title, excerpt, timeToRead }) => (
  <Container>
    <Date className="hover-styles">
      {date} &bull; {timeToRead} min read
    </Date>
    <Title className="hover-styles">{title}</Title>
    <Excerpt>{excerpt}</Excerpt>
  </Container>
)

export default BlogPostCard
