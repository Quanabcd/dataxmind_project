import classNames from 'classnames/bind';
import Languages from 'commons/languages';
import { Button } from 'components/button';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './transaction.module.scss';

const cx = classNames.bind(styles);

function Transaction() {
    const navigate = useNavigate();
    // const { apiServices } = useAppStore();

    const onLogin = useCallback(async () => {
        // const response = await apiServices.common.checkAppState();
        // console.log(response);
        // userManager.updateDemo(response.data);
    }, [navigate]);

    return (
        <div className={cx('page')}>
            <p>
                Transaction
            </p>

            <Button
                label={Languages.auth.login}
                onPress={onLogin}
                buttonStyle={'RED'}
            />
        </div>
    );
}

export default Transaction;
