export default {
    fileSystem: {
        path: './DB'
    },
    mongodb: {
        cnxStr: 'mongodb+srv://admin:admin@cluster0.ucaoefs.mongodb.net/PRUEBA2EPF?retryWrites=true&w=majority',
        options: {
            useNewUrlParser: true,
            user: "root",
            pass: "mongopass",
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        }
    },
    firebase: 
        {
            "type": "service_account",
            "project_id": "ecommerce-5df47",
            "private_key_id": "59eb3a5beeaf6dde35e468ba1ea6cd9b57908f20",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDMjbIUCQlK0nia\n4urbVcwYVgZSHr996R9pA/gLSKOZFOBN219mbZ2My6DDetSQSgDfMzRT9aOh27aM\nsm1z2ZWvnmgP4jYM5uFqtkoxz6SBh/8ggZdvVonR0shnc13mz4mxS6ynFVNzGs9B\nZpDTLVvNfZv6mjX6klWRBwsa+QJ/+2eCWsKF//02HpU2ezCHIt5TIfqgrP3LWGKa\nyXe1+DR9kNvgjKthkxcjbB3PQROyWZzKvvlPP6ECtkrVDgNavP8bWVQZnlx/pgbI\nkIKkaLR60PvJps5U0kD1ya3HhmkylDOqACJ+dh5YVHuNEYg/3J79EqObiV5d7ksC\naKaK88qlAgMBAAECggEAAs9jheZF4WhDeI/rfWM6sDmQ+/8ozvhX58ptKu0u34Mr\nkwY+KPBn51pDdXayMDVEDneWnXH/cybLOuLsoVh44kvBJDljArRdSROuBex+Abrg\n5LfDC9La29i9y2YIq+C9WdkvSwWo+tOAdhE2+3ULu3v2m5povsN/N28rAOOGMZni\nnAhbq4h9n7+AsPcZ6xbfxDQgeE54rzhlJk6A3buNBBdQAyX45P+bHAZXxGCWpp3B\nmIVbq29PFK4xaweFRiCMSihEA3Z8toylfcvDAbrB/gnALVofYZ66ibezaKyCNKOR\nVgx9nz8EAdUEBlHa+5ivqKyqufGCPciaFKOYqRy0gQKBgQDvAGVi/ys/TQ3nKfst\nQwu1xwG4vmuQKiyXtg1RadSI2zTZ0sj1i/PyDzL12hUxCkx0fFdGTaGFh3NwuapR\nZHpL5HxRsDGlrw7+WM4vf7/xQIfF5v2sElaNzboi4HouyUcsQZbFVOHL3S3uCQgI\nOZD6qK0LKNkPbhpbJRAjexeO4QKBgQDbGhbR9OtZeIaOQmTYFkavHMpKSm9mIoXS\np8uk82bYkRxhpnWBPXPlBKVDnkCKEvEjG/7RlZMn5pGV/e4tRpbve7R9axVG9t+f\nY76vOWNeQCP+4kqGU1Kdg71VJpLZgSexXLVIAa9zsn7VW7HusY/Pipztez8vAfmy\nqchckctIRQKBgAbYVw8HyeBNP6mwPR5lvi8dnQICiigd3RsXPrhnNIwa4x+d9t15\nfaogH1CFR3gZGGl5qjI8RPUDFR5UYvljzFDiIWFhj3p0UhSczIL1wLSTKZBUdk14\nVPxIuR0Imtc+Moik9EGAldr14bvgjFdX9rwHGrWoHNdhSuXzYMvzWZBhAoGBAL8p\nuBdftafOfLfKPeo7JVjLqcO/xgo6vL/bHtbAd08k7LpWXddxIpkCwJ6KiIzvkeys\nFFwQQOBjT0qqzxA5sp8oM4Xp1BqicuHCSTDgxU4KcF2GWrdwI3jC5IJSsXWMNnGN\nDa3Rqp8rcXX+FvTHf035Boo9Khd9hbrYX7REkDRxAoGACCS2NxhY6dh/OsJiWzEW\nQwhjelMvv2nW1f42G2WnftNIkxVQltbtr2WqV7VbhUufTtkJJojrAFVlnTXiW9u9\nRvJBcsYS3dbbaZxXXVVr/Zu+nG7Aih3a8HUJBHcvMr8GgNz5JrX7eLia9E0RwL7q\nHvh7ogAkK1O9STrboZ+DsWg=\n-----END PRIVATE KEY-----\n",
            "client_email": "firebase-adminsdk-c960o@ecommerce-5df47.iam.gserviceaccount.com",
            "client_id": "115319273246784365585",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-c960o%40ecommerce-5df47.iam.gserviceaccount.com"
    },
    MODO_PERSISTENCIA: 'fileSystem:'
}