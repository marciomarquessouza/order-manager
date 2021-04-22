import { app } from '@main/config';
import { FirebaseHelper } from '@infra/database';
import { config } from 'dotenv';

const firebaseServiceAccount = require('../serviceAccount.json');

config();

FirebaseHelper.initialize(firebaseServiceAccount);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
