import React from 'react';

import {
  Container,
  Typography,
} from '@mui/material';

import Layout from '../components/Layout';
import Header from '../components/Header';

import userInterface from '../assets/images/user-interface.png';

export default function Home() {
  return (
    <Layout>
      <Header pathname="/" />
      <Container maxWidth="lg" className="pt-16">
        <div className="items-center py-6 row lg:py-2">
          <div className="w-full gap-1.5 lg:w-6/12 stack">
            <Typography className="font-semibold text-green-600">
              Modern solutions based on experts&apos; researches
            </Typography>
            <Typography className="text-3xl font-semibold">
              The leading Innovative Solutions provider
            </Typography>
            <Typography variant="body2" className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Magnam ullam non nobis accusamus vitae possimus explicabo,
            </Typography>
          </div>
          <div className="flex w-full p-3 ml-auto lg:w-5/12">
            <img src={userInterface} alt="user interface" className="w-2/3 h-auto mx-auto" />
          </div>
        </div>
      </Container>
    </Layout>
  );
}
