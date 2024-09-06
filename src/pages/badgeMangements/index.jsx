import React from "react";
import ProfileDetails from "./ProfileDetails"
import Table from "./Table"
import ChartSale from "./ChartSale";
import { Stack } from "@mui/material";

const BadgeManagement = () => {
    return (
        <Stack gap={8}>
            <ChartSale />
            <ProfileDetails />
            <Table />
        </Stack>
    );
};

export default BadgeManagement;
