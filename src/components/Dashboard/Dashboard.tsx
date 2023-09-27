import { Grid } from '@mui/material';
import { NutritionCard } from "components/Dashboard/NutritionCard";
import { WeightCard } from "components/Dashboard/WeightCard";
import { WorkoutCard } from "components/Dashboard/WorkoutCard";
import React from 'react';

export const Dashboard = () => {


    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <WorkoutCard />
            </Grid>
            <Grid item xs={4}>
                <NutritionCard />
            </Grid>
            <Grid item xs={4}>
                <WeightCard />
            </Grid>
        </Grid>
    );
};