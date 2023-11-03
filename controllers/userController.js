import express from 'express'
// /api/user
export const getUsers = async (req, res) => {

    await res.send('I am  all users')
};
