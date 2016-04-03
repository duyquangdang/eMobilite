-- phpMyAdmin SQL Dump
-- version 4.0.10.6
-- http://www.phpmyadmin.net
--
-- Host: mysql1.alwaysdata.com
-- Generation Time: Mar 22, 2016 at 03:22 PM
-- Server version: 5.1.66-0+squeeze1
-- PHP Version: 5.6.8

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
-- Table structure for table `pizzas_mkd`
--

CREATE TABLE IF NOT EXISTS `pizzas_mkd` (
  `PIZMKD_ID` int(11) NOT NULL AUTO_INCREMENT,
  `PIZMKD_IMG` varchar(300) NOT NULL,
  `PIZMKD_NAME` varchar(300) NOT NULL,
  `PIZMKD_ING1` int(11) NOT NULL DEFAULT '0',
  `PIZMKD_ING2` int(11) NOT NULL DEFAULT '0',
  `PIZMKD_ING3` int(11) NOT NULL DEFAULT '0',
  `PIZMKD_ING4` int(11) NOT NULL DEFAULT '0',
  `PIZMKD_ING5` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`PIZMKD_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `pizzas_mkd`
--

INSERT INTO `pizzas_mkd` (`PIZMKD_ID`, `PIZMKD_IMG`, `PIZMKD_NAME`, `PIZMKD_ING1`, `PIZMKD_ING2`, `PIZMKD_ING3`, `PIZMKD_ING4`, `PIZMKD_ING5`) VALUES
(1, 'baconGroovy.png', 'Bacon Groovy', 1, 7, 2, 9, 21),
(2, 'cannibale.png', 'Cannibale', 21, 1, 7, 5, 22),
(3, 'divinePepper.png', 'Divine Pepper', 1, 3, 4, 5, 0),
(4, 'extravaganzza.png', 'Extravaganzza', 1, 23, 19, 5, 28),
(5, 'forestiere.png', 'Forestiere', 1, 12, 2, 19, 6),
(6, 'originalMoutarde.png', 'Original Moutarde', 1, 2, 6, 7, 8),
(7, 'pepperoni.png', 'Pepperoni', 1, 7, 23, 3, 24),
(8, 'quatreFromages.png', '4 fromages', 1, 15, 24, 27, 0),
(9, 'raclette.png', 'Raclette', 1, 9, 2, 10, 11),
(10, 'saumoneta.png', 'Saumoneta', 1, 2, 13, 25, 26),
(11, 'savoyarde.png', 'Savoyarde', 1, 12, 13, 14, 0),
(12, 'sublimCurry.png', 'Sublim Curry', 1, 7, 2, 17, 18),
(13, 'sweetChevre.png', 'Chevre', 1, 12, 2, 15, 16);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;