from flask import Flask, jsonify # type: ignore
from flask_cors import CORS # type: ignore


app = Flask(__name__)
cors = CORS(app, origins = '*')

@app.route('/api/toys',methods=['GET'])

def get_users():
    return jsonify({'toys': [
            {
        "id": 1,
        "name": "Woody",
        "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
        "likes": 10
        },
        {
        "id": 2,
        "name": "Buzz Lightyear",
        "image": "http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png",
        "likes": 14
        },
        {
        "id": 3,
        "name": "Mr. Potato Head",
        "image": "https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/d/d8/Mr-potato-head-toy-story.gif/revision/latest?cb=20151129131217",
        "likes": 3
        },
        {
        "id": 5,
        "name": "Rex",
        "image": "https://cdn140.picsart.com/244090226021212.png?r1024x1024",
        "likes": 1
        },
        {
        "id": 6,
        "name": "Bo Peep",
        "image": "http://4.bp.blogspot.com/_OZHbJ8c71OM/Sog43CMFX2I/AAAAAAAADEs/0AKX0XslD4g/s400/bo.png",
        "likes": 2
        },
        {
        "id": 7,
        "name": "Hamm",
        "image": "https://cdn140.picsart.com/244090226021212.png?r1024x1024",
        "likes": 0
        },
        {
        "id": 8,
        "name": "Little Green Men",
        "image": "http://www.pngmart.com/files/3/Toy-Story-Alien-PNG-File.png",
        "likes": -2
        }
    ]})

if __name__ == '__main__':
    app.run(debug=True, port=8080, host='192.168.88.21')
