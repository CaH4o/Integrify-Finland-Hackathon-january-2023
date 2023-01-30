import { useState, MouseEvent } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

import SettingMainAccount from "./SettingMainAccount";

export default function SettingMain() {
  const [renderSetting, setRenderSetting] = useState<string>("account");

  function handleClickSetting(event: MouseEvent<HTMLButtonElement>) {
    const renderSetting: string = event?.currentTarget.name;
    setRenderSetting(renderSetting);
  }

  return (
    <Card
      sx={{
        m: "1.5rem",
        maxWidth: 900,
        display: "flex",
      }}
    >
      <Box
        component="div"
        sx={{
          width: 200,
          minHeight: 500,
          borderRight: "solid 0.5px gray",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ height: 150, width: 150 }} aria-label="recipe">
              <img
                style={{ minHeight: 150, minWidth: 150, objectFit: "cover" }}
                src="./photo-1438761681033-6461ffad8d80.jpg"
                alt="avatar"
              ></img>
            </Avatar>
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {"Person Name"}
          </Typography>
        </CardContent>
        <CardActions
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 0,
            margin: 0,
          }}
        >
          <Button
            size="large"
            style={{
              textTransform: "none",
              width: "100%",
              margin: 0,
              color: "black",
              background: renderSetting === "account" ? "#007CFF" : "",
            }}
            name="account"
            onClick={handleClickSetting}
          >
            Account
          </Button>
          <Button
            size="large"
            style={{
              textTransform: "none",
              width: "100%",
              margin: 0,
              color: "black",
              background: renderSetting === "password" ? "#007CFF" : "",
            }}
            name="password"
            onClick={handleClickSetting}
          >
            Password
          </Button>
          <Button
            size="large"
            style={{
              textTransform: "none",
              width: "100%",
              margin: 0,
            }}
            name="security"
            onClick={handleClickSetting}
            disabled
          >
            Security
          </Button>
          <Button
            size="large"
            style={{
              textTransform: "none",
              width: "100%",
              margin: 0,
            }}
            name="application"
            onClick={handleClickSetting}
            disabled
          >
            Application
          </Button>
          <Button
            size="large"
            style={{
              textTransform: "none",
              width: "100%",
              margin: 0,
            }}
            name="notification"
            onClick={handleClickSetting}
            disabled
          >
            Notification
          </Button>
        </CardActions>
      </Box>
      <Box component="div" sx={{ width: "100%", minHeight: 500 }}>
        {renderSetting === "account" ? <SettingMainAccount /> : null}
        {renderSetting === "password" ? <></> : null}
        {renderSetting === "security" ? <></> : null}
        {renderSetting === "application" ? <></> : null}
        {renderSetting === "notification" ? <></> : null}
      </Box>
    </Card>
  );
}
