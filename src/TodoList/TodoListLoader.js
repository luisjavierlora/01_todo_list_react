import React from "react"
import ContentLoader from "react-content-loader"

const TodoListLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={200}
    viewBox="0 0 400 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#aba6a6"
    {...props}
  >
    <rect x="4" y="14" rx="0" ry="0" width="402" height="22" /> 
    <rect x="4" y="56" rx="0" ry="0" width="402" height="22" /> 
    <rect x="5" y="97" rx="0" ry="0" width="402" height="22" />
  </ContentLoader>
)

export {TodoListLoader}