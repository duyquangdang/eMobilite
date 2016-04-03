-- tables

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `doukceri_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `tables`
--

CREATE TABLE IF NOT EXISTS `tables` (
  `TBL_ID` int(11) NOT NULL AUTO_INCREMENT,
  `TBL_NUM` int(11) NOT NULL,
  `TBL_ZONE` int(11) NOT NULL,
  `TBL_RESERVEE` int(11) NOT NULL DEFAULT '0',
  `TBL_PAIEMENT` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`TBL_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=25 ;


INSERT INTO `tables` (`TBL_ID`, `TBL_NUM`, `TBL_ZONE`, `TBL_RESERVEE`, `TBL_PAIEMENT`) VALUES
(1, 1, 1, 0, 0),
(2, 2, 1, 0, 0),
(3, 3, 1, 0, 0),
(4, 4, 1, 0, 0),
(5, 1, 2, 0, 0),
(6, 2, 2, 0, 0),
(7, 3, 2, 0, 0),
(8, 4, 2, 0, 0),
(9, 1, 3, 0, 0),
(10, 2, 3, 0, 0),
(11, 3, 3, 0, 0),
(12, 4, 3, 0, 0),
(13, 1, 4, 0, 0),
(14, 2, 4, 0, 0),
(15, 3, 4, 0, 0),
(16, 4, 4, 0, 0),
(17, 1, 5, 0, 0),
(18, 2, 5, 0, 0),
(19, 3, 5, 0, 0),
(20, 4, 5, 0, 0),
(21, 1, 6, 0, 0),
(22, 2, 6, 0, 0),
(23, 3, 6, 0, 0),
(24, 4, 6, 0, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;