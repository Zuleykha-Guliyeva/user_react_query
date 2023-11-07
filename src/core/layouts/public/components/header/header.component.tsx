import './header.style'
import { useHeaderStyles } from './header.style'
const HeaderComponent = () => {
    const classes = useHeaderStyles();
    return (
        <div className={classes.header}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent;