SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `pontos`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `ppd`
--

CREATE TABLE IF NOT EXISTS `ppd` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `latitude` Decimal(8,6) NOT NULL,
  `longitude` Decimal(9,6) NOT NULL,
  `title` longtext NOT NULL,
  `description` longtext NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Inserindo dados na tabela `ppd`
--

INSERT INTO `ppd` 
	(`latitude`, `longitude`, `title`, `description`) 
VALUES
	(-23.429306, -47.140025, 'A Quinta do Marquês', 'Rodovia Castello Branco (SP-280), km 57, São Roque, sentido Capital (Leste) - CCR ViaOeste'),
	(-23.204018, -46.928044, 'Graal 56', 'Rodovia dos Bandeirantes, km 56, Jundiaí, sentido Sul (Interior - Capital) - CCR AutoBAn');