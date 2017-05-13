// server/app.js
const express = require('express');
const path = require('path');
const app = require('./config');

// Serve static assets
app.use('/mobile',express.static(path.resolve(__dirname, '..', 'public')))

app.use(express.static(path.resolve(__dirname, '..', 'eHome')))

app.get('/', (req,res) => {
  res.sendFile(path.resolve(__dirname, '..', 'eHome','html','index.html'));
})

app.get('/mobile', (req,res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
})

app.use('/api',require('./router'))

app.get('/houtai', (req, res) => {

  res.sendFile(path.resolve(__dirname, '..', 'public','houtai','index.html'));
});

app.get('/houtai/*', (req, res) => {

  res.sendFile(path.resolve(__dirname, '..', 'public','houtai','index.html'));
});

module.exports = app;
