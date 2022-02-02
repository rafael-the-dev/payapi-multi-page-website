import classNames from 'classnames'
import { useGlobalStyles } from '../../styles'
import { Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import { useStyles } from './styles';
import { useCallback } from 'react';
import { ReactComponent as GoogleLogo } from '../../assets/images/shared/google.svg';
import { ReactComponent as MicrosoftLogo } from '../../assets/images/shared/microsoft.svg';
import { ReactComponent as TeslaLogo } from '../../assets/images/shared/tesla.svg';
import { ReactComponent as NvidiaLogo } from '../../assets/images/shared/nvidia.svg';
import { ReactComponent as OracleLogo } from '../../assets/images/shared/oracle.svg';
import { ReactComponent as HewlettPackardLogo } from '../../assets/images/shared/hewlett-packard.svg';

const Contact = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    const ImageContainer = useCallback(({ alt, children, image }) => (
        <div className={classNames('mb-12 w-1/2', classes.companyImageContainer)}>
            { image }
        </div>
    ), [ classes ])

    return (
        <main>
            <section className={classNames('bg-no-repeat flex flex-col items-stretch', globalStyles.hero, globalStyles.px)}>
                <Typography 
                    className={classNames('font-bold text-center md:text-left mb-16', 
                    globalStyles.sanJuanBlueColor, classes.heroContentTitle)}
                    component="h1"
                    variant="h4">
                        Submit a help request and we’ll get in touch shortly.
                </Typography>
                <div>
                    <form>
                        <TextField 
                            classes={{ root: classNames(classes.textField)}}
                            className={classNames('mb-2.5')}
                            fullWidth
                            label="Name" 
                            variant="standard" 
                        />
                        <TextField 
                            classes={{ root: classNames(classes.textField)}}
                            className={classNames('mb-2.5')}
                            fullWidth
                            label="Email Address" 
                            variant="standard" 
                        />
                        <TextField 
                            classes={{ root: classNames(classes.textField)}}
                            className={classNames('mb-2.5')}
                            fullWidth
                            label="Company Name" 
                            variant="standard" 
                        />
                        <TextField 
                            classes={{ root: classNames(classes.textField)}}
                            className={classNames('mb-2.5')}
                            fullWidth
                            label="Title" 
                            variant="standard" 
                        />
                        <TextField 
                            classes={{ root: classNames(classes.textField)}}
                            className={classNames('mb-2.5')}
                            fullWidth
                            label="Message" 
                            multiline
                            rows={5}
                            variant="standard" 
                        />
                        <FormControlLabel 
                            classes={{ root: classNames('mt-4', classes.formControlLabel)}}
                            control={
                                <Checkbox 
                                    defaultChecked 
                                />
                            } 
                            label="Stay up-to-date with company announcements and updates to our API" 
                        />
                        <button 
                            className={classNames('rounded-full bg-transparent px-8 py-1.5 mt-5 border border-cyan-900 border-solid capitalize',
                            globalStyles.sanJuanBlueColor, 'mr-auto')}>
                            Submit
                        </button>
                    </form>
                    <div className={classNames('mt-16')}>
                        <Typography 
                            component="h2" 
                            variant="h5" 
                            className={classNames('text-center md:text-left font-bold', globalStyles.sanJuanBlueColor)}>
                            Join the thousands of innovators already building with us
                        </Typography>
                        <div className={classNames('flex items-center justify-between flex-wrap mt-8', classes.companiesLogosContainer)}>
                            <ImageContainer alt="tesla" image={<TeslaLogo  className={classNames('text-white mx-auto', classes.companiesLogos)}/>} />
                            <ImageContainer alt="microsoft" image={<MicrosoftLogo className={classNames('text-white mx-auto', classes.companiesLogos)}/>} />
                            <ImageContainer alt="hewlettPackard" image={<HewlettPackardLogo className={classNames('text-white mx-auto', classes.companiesLogos)}/>} />
                            <ImageContainer alt="oracle" image={<OracleLogo className={classNames('text-white mx-auto', classes.companiesLogos)}/>} />
                            <ImageContainer alt="google" image={<GoogleLogo  className={classNames('text-white mx-auto', classes.companiesLogos)}/>} />
                            <ImageContainer alt="nvidia" image={<NvidiaLogo  className={classNames('text-white mx-auto', classes.companiesLogos)}/>} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;