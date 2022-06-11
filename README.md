![Japan API](https://user-images.githubusercontent.com/100104319/172228983-0f1cf849-a8f5-4a80-b9f2-1e9a47da2771.jpg)

Have you ever wanted to build a site about Japan and needed some good data? Well Japan Info API has you covered. This is an ever evolving REST API with info about Japan. To view current endpoints available head to the [section below](#endpoints).

## Install & Use
1. Fork and clone repo
2. Install dependencies via `npm install`
3. `npm run dev` to start development server
4. Open localhost:8000 in browser

## Roadmap
The best place to find out what is being worked on and priorities is the [issues page](https://github.com/curtisbarnard/japan-info-api/issues). Below is a general roadmap of features in order. 

1. Create an example client side page and deploy so users can test the API endpoints.
2. Transfer current data from JS file to mongoDB database
3. Add additional endpoints
    - Food
    - Tourist Attractions
    - Hot Springs
    - History

## Releases
- 0.0.1
  - Initial prefecture endpoint
  - Client side example work in progress

## Endpoints
- `https://japan-info-api.herokuapp.com/api/prefecture`
  - Will return info on all 47 prefectures of japan
- `https://japan-info-api.herokuapp.com/api/prefecture/example`
  - Replace `example` with a prefectures english name
  - Will return info on a single prefecture

## Contributing
1. Check for any [open issues](https://github.com/curtisbarnard/japan-info-api/issues)
2. Fork it
3. Create your feature branch (`git checkout -b feature/fooBar`)
4. Commit your changes (`git commit -am 'Add some fooBar'`)
5. Push to the branch (`git push origin feature/fooBar`)
6. Create a new Pull Request
