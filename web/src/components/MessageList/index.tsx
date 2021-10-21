import styles from './styles.module.scss';

import logoImg from '../../assets/logo.svg';

export function MessageList(){
    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021"/>

            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Nao vejo a hora de comecar esse evento fera demais.</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/dudusapio.png" alt="Eduardo Sapio Saccardo" />
                        </div>
                        <span>Eduardo Sapio</span>
                    </div>

                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>Nao vejo a hora de comecar esse evento fera demais.</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/dudusapio.png" alt="Eduardo Sapio Saccardo" />
                        </div>
                        <span>Eduardo Sapio</span>
                    </div>

                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>Nao vejo a hora de comecar esse evento fera demais.</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/dudusapio.png" alt="Eduardo Sapio Saccardo" />
                        </div>
                        <span>Eduardo Sapio</span>
                    </div>

                </li>
                
            </ul>
        </div>
    )
}