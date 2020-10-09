import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Flex from "./flex"
import { Text } from "./typography"
//icon
import HomeIcon from "../images/svg/home.svg"
import HomeIconPressed from "../images/svg/home-pressed.svg"
import JobIcon from "../images/svg/job.svg"
import JobIconPressed from "../images/svg/job-pressed.svg"
import AccountIcon from "../images/svg/account.svg"
import AccountIconPressed from "../images/svg/account-pressed.svg"
import NewsIcon from "../images/svg/news.svg"
import NewsIconPressed from "../images/svg/news-pressed.svg"
import SupportIcon from "../images/svg/support.svg"
import SupportIconPressed from "../images/svg/support-pressed.svg"

export const NavWrapper = styled(Flex)`
  width: 100%;
  position: fixed;
  z-index: 100;
  background-color: white;
  height: 9%;
  justify-content: space-around;
  bottom: 0;
  box-shadow: -11px 3px 22px #e2e2ec;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`

export const Nav = () => {
  const [active_link, setActiveLink] = useState(false)
  const isActive = ({ location }) => {
    setActiveLink(location.pathname.split("/")[1])
  }

  const ExactNavLink = props => <StyledLink getProps={isActive} {...props} />

  return (
    <NavWrapper>
      <Flex ai="center" jc="center" fd="column">
        <ExactNavLink to="/">
          {(active_link === "" && <HomeIconPressed />) || <HomeIcon />}

          <Text color={active_link === "" ? "#548fe8" : "black"}>Home</Text>
        </ExactNavLink>
      </Flex>
      <Flex ai="center" jc="center" fd="column">
        <StyledLink to="/jobs">
          {(active_link === "jobs" && <JobIconPressed />) || <JobIcon />}
          <Text color={active_link === "jobs" ? "#548fe8" : "black"}>
            MyJobs
          </Text>
        </StyledLink>
      </Flex>
      <Flex ai="center" jc="center" fd="column">
        <StyledLink to="/support">
          {(active_link === "support" && <SupportIconPressed />) || (
            <SupportIcon />
          )}

          <Text color={active_link === "support" ? "#548fe8" : "black"}>
            Support
          </Text>
        </StyledLink>
      </Flex>
      <Flex ai="center" jc="center" fd="column">
        <StyledLink to="/news">
          {(active_link === "news" && <NewsIconPressed />) || <NewsIcon />}

          <Text color={active_link === "news" ? "#548fe8" : "black"}>News</Text>
        </StyledLink>
      </Flex>
      <Flex ai="center" jc="center" fd="column">
        <StyledLink to="/account">
          {(active_link === "account" && <AccountIconPressed />) || (
            <AccountIcon />
          )}

          <Text color={active_link === "account" ? "#548fe8" : "black"}>
            Account
          </Text>
        </StyledLink>
      </Flex>
    </NavWrapper>
  )
}
