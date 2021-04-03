const Sequelize =require('sequelize');

module.exports = function (sequelize) {
    const Article = sequelize.define('Article', {
        // prop
        title: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false
        },
        pictureUrl: {
            type:Sequelize.STRING,
            required:true,
            allowNull:false
        },
        summary: {
            type:Sequelize.TEXT,
            allowNull:false,
            required:true
        },
        content: {
            type:Sequelize.TEXT,
            allowNull:false,
            required:true
        },
        date: {
            type: Sequelize.DATE,
            allowNull:false,
            required:true,
            defaultValue: Sequelize.NOW
        },
    },{
        timestamps:false
    });
    Article.associate = function (models) {
        Article.belongsTo(models.User, {
            foreignKey: 'authorId',
            targetKey: 'id'
        })

    }

    return Article;

};