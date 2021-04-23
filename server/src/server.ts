import { app, env } from '@main/config';
import { FirebaseHelper } from '@infra/database';

const firebaseServiceAccount = require('../serviceAccount.json');

FirebaseHelper.initialize(firebaseServiceAccount);

const PORT = env.port || 5001;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
