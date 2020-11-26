import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SocialLinks.css'

const socialLinks = [
	{
		url      : 'https://github.com/christopherConcannon',
		iconName : 'github-alt'
	},
	{
		url      : 'https://www.linkedin.com/in/christopher-concannon-4a91841a6/',
		iconName : 'linkedin-in'
	},
	// {
	// 	url      : 'https://www.instagram.com/',
	// 	iconName : 'instagram'
	// },
	// {
	// 	url      : 'https://stackexchange.com/users/18248282/christopher-c',
	// 	iconName : 'stack-overflow'
	// },
	{
	  url: 'mailto:xtophe@christopherconcannon.com',
	  iconName: 'envelope'
	}
]

function SocialLinks() {
	return (
		<React.Fragment>
			{socialLinks.map((link) => (
				<li key={link.iconName} className='SocialLink'>
					<a href={link.url} target='blank' rel='noopener noreferrer'>
						<FontAwesomeIcon icon={link.iconName === 'envelope' ? 'envelope' : [ 'fab', `${link.iconName}` ]} />
					</a>
				</li>
			))}
		</React.Fragment>
	)
}

export default SocialLinks
