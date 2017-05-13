const express = require('express')
const router = express.Router()

const { sql,db } = require('../db')

router.get('/user', (req, res) => {
  db.then(() => {
    return sql.query`select * from tb_huodong order by createdAt desc`
  })
    .then(result => {
      res.send(result)
    })
    .catch(err => {console.error('sql error:',err)})
})

router.post('/user/completed', (req, res) => {
  const { id } = req.body
  db.then(() => {
    const request = new sql.Request()
    return request
    .query(`
        declare @c bit
        select @c=completed from tb_huodong where id=${id}
        if(@c is null or @c=0)
        update tb_huodong set completed = 1 where id=${id}
        if(@c=1)
        update tb_huodong set completed = 0 where id=${id}
      `)
  })
  .then( result => {
    res.json(result)
  })
})

router.post('/appointment/completed', (req, res) => {
  const { id } = req.body
  db.then(() => {
    const request = new sql.Request()
    return request
    .query(`
        declare @c bit
        select @c=completed from tb_ej_yuy where id=${id}
        if(@c is null or @c=0)
        update tb_ej_yuy set completed = 1 where id=${id}
        if(@c=1)
        update tb_ej_yuy set completed = 0 where id=${id}
      `)
  })
  .then( result => {
    res.json(result)
  })
})

router.post('/user/memo', (req, res) => {
  const { id,memo } = req.body
  db.then(() => {
    const request = new sql.Request()
    return request
    .query(`
        update tb_huodong set memo = '${memo}' where id=${id}
      `)
  })
  .then( result => {
    res.json(result)
  })
})

router.post('/appointment/memo', (req, res) => {
  const { id,memo } = req.body
  db.then(() => {
    const request = new sql.Request()
    return request
    .query(`
        update tb_ej_yuy set memo = '${memo}' where id=${id}
      `)
  })
  .then( result => {
    res.json(result)
  })
})

router.get('/appointment', (req,res) => {
  db.then(() => {
    return sql.query`select *
      from tb_ej_yuy
      order by createdAt desc
    `
  })
    .then(result => {
      res.send(result)
    })
    .catch(err => {console.error('sql error:',err)})
})

router.post('/appointment', (req,res) => {
  // if(req.bdoy){
    const { name,phone,bao,kuan,price } = req.body
    db.then(() => {
      const request = new sql.Request()
      return request
      .output('msg',sql.VarChar(100))
      .query(`
          set @msg = '预约成功。'
          if exists (select 1 from tb_ej_yuy where name = '${name}' and phone = '${phone}')
          begin
            set @msg = '请勿重复预约。'
            return
          end
          insert into tb_ej_yuy
          (name,phone,bao,kuan,price,createdAt)
          values('${name}','${phone}','${bao}','${kuan}','${price}',getdate())
        `)
    })
    .then( result => {
      res.json(result)
    })
  // }
})

router.post('/liangfang', (req,res) => {
  // if(req.bdoy){
    const { name,phone,area,address } = req.body
    db.then(() => {
      const request = new sql.Request()
      return request
      .output('msg',sql.VarChar(100))
      .query(`
          set @msg = '预约成功。'
          if exists (select 1 from tb_huodong where name = '${name}' and phone = '${phone}')
          begin
            set @msg = '请勿重复预约。'
            return
          end
          insert into tb_huodong
          (name,phone,area,address,huodong,createdAt)
          values('${name}','${phone}','${area}','${address}','量房',getdate())
        `)
    })
    .then( result => {
      res.json(result)
    })
  // }
})

module.exports = router
