import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Container, Date } from './style'
import { H5, Body, SmallBody } from '../globals'
import Quill from '../../icons/Quill'

const BlogPostCard = ({ date, title, excerpt, timeToRead }) => {
  const theme = useContext(ThemeContext)
  return (
    <Container>
      <div>
        <H5 paddingBottom={theme.spacing._1}>{title}</H5>
        <Body
          paddingBottom={theme.spacing._6}
          color={theme.colors.secondaryBody}
        >
          {excerpt}
        </Body>
      </div>
      <Date>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ marginRight: theme.spacing._1 }}>
            <Quill color={theme.colors.socialIcon} />
          </div>
          <SmallBody color={theme.colors.accentBody}>on {date}</SmallBody>
        </div>
        <SmallBody color={theme.colors.accentBody}>
          {timeToRead} min read
        </SmallBody>
      </Date>
    </Container>
  )
}

export default BlogPostCard
