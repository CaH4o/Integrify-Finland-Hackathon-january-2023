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
        <CardActions style={{ display: "flex", flexDirection: "column" }}>
          <Button
            style={{ textTransform: "none", width: "100%" }}
            name="account"
            onClick={handleClickSetting}
          >
            Account
          </Button>
          <Button
            style={{ textTransform: "none", width: "100%" }}
            name="password"
            onClick={handleClickSetting}
          >
            Password
          </Button>
          <Button
            style={{ textTransform: "none", width: "100%" }}
            name="security"
            onClick={handleClickSetting}
          >
            Security
          </Button>
          <Button
            style={{ textTransform: "none", width: "100%" }}
            name="application"
            onClick={handleClickSetting}
          >
            Application
          </Button>
          <Button
            style={{ textTransform: "none", width: "100%" }}
            name="notification"
          >
            Notification
          </Button>
        </CardActions>
      </Box>
      <Box component="div" sx={{ width: "100%", minHeight: 500, }}>
        {renderSetting === "account" ? <SettingMainAccount /> : null}
        {renderSetting === "password" ? <></> : null}
        {renderSetting === "security" ? <></> : null}
        {renderSetting === "application" ? <></> : null}
        {renderSetting === "notification" ? <></> : null}
      </Box>
    </Card>
  );
}
