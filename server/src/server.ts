import { app, env } from '@main/config';
import { FirebaseHelper } from '@infra/database';

const firebaseServiceAccount = require('../serviceAccount.json');

FirebaseHelper.initialize(firebaseServiceAccount);

app.listen(env.port, () => console.log(`Server is running on port ${env.port}`));
