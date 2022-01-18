For owned domain follow: https://www.sitepoint.com/how-to-use-ssltls-with-node-js/

For "localhost" follow (a workaround): https://ritesh-yadav.github.io/tech/getting-valid-ssl-certificate-for-localhost-from-letsencrypt/

- We can't use certbot/letsencrypt to generate certificates for "localhost"

- Then if we use openssl to generate self signed certificates, it will not work. Because, self signed certificates are not recognized by browsers (unless added manually in trusted certificates).

---

("fullchain.pem", "privkey.pem" and domain mentioned in this repo are only for demo.)

- Install "certbot"

- Deploy a simple app on heroku, if not already done. So, that we can use it's domain name.

mysterious-sierra-1234.herokuapp.com

- Run `sudo certbot certonly --manual`

  - Enter heroku app domain

  - Implement the route asked in console, in your heroku app and publish the app

- Copy gererated material to desired folder

```
sudo cat /etc/letsencrypt/live/mysterious-sierra-1234.herokuapp.com/privkey.pem > privkey.pem

sudo cat /etc/letsencrypt/live/mysterious-sierra-1234.herokuapp.com/fullchain.pem > fullchain.pem
```

- Add domain to /etc/hosts

```
127.0.0.1 localhost mysterious-sierra-1234.herokuapp.com
```

- Go to 

https://mysterious-sierra-1234.herokuapp.com:8443