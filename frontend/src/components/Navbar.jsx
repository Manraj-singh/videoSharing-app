import React, { useState } from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Upload from "./Upload";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <Container>
        <Wrapper>
          <Search>
            <Input
              placeholder="Search"
              onChange={(e) => setQ(e.target.value)}
            />
            <SearchOutlinedIcon onClick={() => navigate(`/search?q=${q}`)} />
          </Search>
          {currentUser ? (
            <User>
              <VideoCallOutlinedIcon onClick={() => setOpen(true)} />
              <Avatar
                src={
                  currentUser.img ||
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAM1BMVEWVu9////+QuN6Mtt34+v2syeXg6vXw9fqkxOPN3u/p8PidwOG2z+i70umox+TD1+zU4vGBmrCAAAADdUlEQVRoge1ba5OrIAyFRBBE1P//ay/WtdvtAxNN6swdz+yHnWl3j0CeJ2LMhQsXLlABAAhYfsov36ZGdGP0XVvQ+Ti68hhfI8eUO/uELif8CjmkqXkmn9FM6Rs7EN9xL4hG+QEgtZ/ZrW11NwBcjXyGU+SHfovd2l6Nf3vtuut/a/HPaJTI0VPYrfUqAYBy8AtUjh+rLveIVmH5NLtboGB9QDz5GV5h9+ns1oqT0w1vRpZePkwc+kl8918yfA2dNHsiRbwVTRKmDxx2a4MwPcPrZzhZdp7hi8ddGHn040X//9Cfa3onO97ZYefkoGvIpdaMVpodeBlPOuEiL99LF5uQOfTi1Q7P9KUN3xA7rAUKfdbJhTYn6gtH/BsSnV486BQg+fAbjRYXKprSX0QVgYHsegpuZ+gdtkZ/beglh5a4BKTli2e7Oz0p7svH+zs/Yflqiy/0wzb9oClrbmZ9+c7+D/9G6GuUJe2N2KMTcX5R19c09ewf/or5aZrdnf/TREF5lmBgmZWAeWv/0/qpykMAJr+uD4eXyssPS6Ipe+OT+FQNsb8xrvuLKT70HV1cp2hwq4l8j4JZD9DF1d/d+n8BTMixIAdzH2PimhSb6GS2oLDER1t7HJbBDQ9ffSyI2hgOmwGYl4Fl98m5wT27RJePPQDmd0HWh9eNBQzvGoEmHzGCT23tPLH93XUoXjF+ysUH5N1afmmn7EIqCC5PtTpgd8e12dI3N2x9a9/6eQp+DbtqAEJlQ8XAZ0eWmlJHxzd/ppBXB1vm42k5W2BrPSjJbi2TnqvhboHZeMl53QKm79G1BBq4ioMsO3OsKn30zMOXPnru4QuGvAW8vCNsecy0y9DwqGBofZwXJahgtH90CY8OhthHfUOHA8bbPLzJCQ2M+Ur9rbh9aOm2xxza0UAXPhQMn1Hx8MZGVJDlRg2/Y3ieht8xPE+yxv4FudqmvxrHAVnm35Iu94EueOrQU9l5s3oyPTXsnUwfdOipUfdk+pNNT7a7XcHochX4JzL5LNp70QNoPFPqf3f/Yi923dsANFkg9fls9orLgBjigU3oYjh6Y6b8dRh9yzWF1o/BCA02yjkER32GpjC7ZKSvKpWTSK6PvlIMtD72LineUILyEGiGfoxx8t1yKarzU4xjP5jy0XeuZ8EP8Mb4NNS4cOHChRr+AccJJi455hC2AAAAAElFTkSuQmCC"
                }
              />
              {currentUser.name}
            </User>
          ) : (
            <Link to="signin" style={{ textDecoration: "none" }}>
              <Button>
                <AccountCircleOutlinedIcon />
                SIGN IN
              </Button>
            </Link>
          )}
        </Wrapper>
      </Container>
      {open && <Upload setOpen={setOpen} />}
    </>
  );
};

export default Navbar;
