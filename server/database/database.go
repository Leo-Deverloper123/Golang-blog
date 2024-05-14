package database

import (
	"log"
	"os"

	"github.com/neerajbg/blog/model"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DBConn *gorm.DB

func ConnectDB() error {
	user := os.Getenv("db_user")
	password := os.Getenv("db_password")
	dbname := os.Getenv("db_name")

	dsn := user + ":" + password + "@tcp(127.0.0.1:3306)/" + dbname + "?charset=utf8mb4&parseTime=True&loc=Local"

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		return err
	}

	log.Println("Database connected.")

	err = db.AutoMigrate(&model.Blog{})
	if err != nil {
		return err
	}

	DBConn = db

	return nil
}
