const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const UserScheme = mongoose.Schema(
    {
        name: {
            type: String
        }
    },
    {
        age: {
            type: Number
        }
    },
    {
        email: {
            type: String,
            unique: true
        }
    },
    {
        password: {
            type: String
        }
    },
    {
        role: {
            type: ['user', 'admin'],
            default: 'user',
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }

);

UserScheme.plugin(mongooseDelete, {overrideMethods: 'all'})
module.exports = mongoose.model('users', UserScheme)

/*Usuario de prueba
{
    "name":"Leifer",
    "album":"Album",
    "cover":"http://sss.com",
    "artist":{
        "name":"Leifer",
        "nickname":"leiferfernandez",
        "nationality":"VE"
    },
    "duration":{
        "start":1,
        "end":0
    },
    "mediaId":"asdasdasdasd"
}
*/